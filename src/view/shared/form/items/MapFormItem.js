import React, { Component } from 'react';
import { Form, Tooltip } from 'antd';
import { formItemLayout } from 'view/shared/styles/FormWrapper';
import PropTypes from 'prop-types';
import FormErrors from 'view/shared/form/formErrors';
import { FastField } from 'formik';
import { InfoCircleOutlined } from '@ant-design/icons';
import administrative_zoneService from 'modules/administrative_zone/administrative_zoneService';

import L from 'leaflet';
import 'leaflet-draw';
import 'leaflet-draw/dist/leaflet.draw.css';
import 'leaflet-geometryutil';
class MapFormItemNotFast extends Component {
  constructor(props) {
    super(props);
    this.map = null;
  }

  componentDidUpdate = (prevProps) => {
    // Utilisation classique (pensez bien à comparer les props) :
    if (
      this.props.administrative_zone_child !==
      prevProps.administrative_zone_child
    ) {
      if (
        this.map &&
        this.props.administrative_zone_child
      ) {
        administrative_zoneService
          .find(
            parseInt(
              this.props.administrative_zone_child.id ||
                this.props.administrative_zone_child,
            ),
          )
          .then((e) => {
            this.map.setView(
              new L.LatLng(e.latitude, e.longitude),
              12,
            );

            this.map.setMaxBounds(e.geocode_values);
          });
      }
    }
  };

  getCentroid = (arr) => {
    return arr.reduce(
      function (x, y) {
        return [
          x[0] + y[0] / arr.length,
          x[1] + y[1] / arr.length,
        ];
      },
      [0, 0],
    );
  };

  _value = () => {
    const { form, name } = this.props;

    if (form.values[name]) {
      return form.values[name].center;
    }
    return [31.791702, -7.09262];
  };

  componentDidMount = () => {
    const { form, name } = this.props;

    // create map
    this.map = L.map('map', {
      center: this._value(),
      maxBounds: [],

      zoom: form.values[name] ? 15 : 6,
      maxZoom: 18,
      minZoom: 3,
      layers: [
        L.tileLayer(
          'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
          {
            attribution:
              '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          },
        ),
      ],
    });

    var editableLayers = new L.FeatureGroup();
    this.map.addLayer(editableLayers);

    var drawnItems = L.geoJSON().addTo(this.map);

    var drawPluginOptions = {
      position: 'topright',
      draw: {
        polygon: {
          allowIntersection: false, // Restricts shapes to simple polygons
          drawError: {
            color: '#e1e100', // Color the shape will turn when intersects
            message:
              "<strong>Oh snap!<strong> you can't draw that!", // Message that will show when intersect
          },
          shapeOptions: {
            color: '#97009c',
          },
        },
        // disable toolbar item by setting it to false
        polyline: false,
        circle: false, // Turns off this drawing tool
        rectangle: false,
        marker: false,
      },
      edit: {
        featureGroup: editableLayers, //REQUIRED!!
        remove: false,
        edit: false,
      },
    };

    if (form.values[name]) {
      let oldLayer = L.polygon(
        form.values[name].coordinates,
      ).addTo(this.map);
      oldLayer.on('click', (e, data) => {
        this.map.removeLayer(oldLayer);
        this.SetField();
      });
    }
    var drawControl = new L.Control.Draw(drawPluginOptions);
    this.map.addControl(drawControl);

    var editableLayers = new L.FeatureGroup();
    this.map.addLayer(editableLayers);

    this.map.on('draw:created', (e, data) => {
      if (drawnItems.getLayers().length != 0) {
        this.map.eachLayer((layer) => {
          if (layer instanceof L.Polygon) {
            this.map.removeLayer(layer);
          }
        });
      }
      var type = e.layerType,
        layer = e.layer;

      if (type === 'marker') {
        layer.bindPopup('A popup!');
      }
      layer.on('click', (e, data) => {
        this.map.removeLayer(layer);
        this.SetField();
      });
      drawnItems.addLayer(layer);
      this.SetField(layer);
    });
  };

  SetField = (layer = null) => {
    const {
      label,
      name,
      form,
      hint,
      layout,
      options,
      formItemProps,
      inputProps,
      errorMessage,
      required,
    } = this.props;
    if (layer) {
      var geoData = layer
        .getLatLngs()[0]
        .map((e) => [e.lat, e.lng]);
      var dis = layer.getLatLngs();

      var seeArea = Math.round(
        L.GeometryUtil.geodesicArea(layer.getLatLngs()[0]) /
          10000,
      );
      form.setFieldValue(name, {
        center: this.getCentroid(geoData),
        coordinates: geoData,
      });
      form.setFieldValue('area', seeArea);
    } else {
      form.setFieldValue(name, null);
    }
  };

  render() {
    const {
      label,
      name,
      form,
      hint,
      layout,
      options,
      formItemProps,
      inputProps,
      errorMessage,
      required,
      initGeo,
    } = this.props;

    let formLayour = {
      wrapperCol: {
        md: { span: 15 },
        lg: { span: 15 },
      },
    };

    return (
      <Form.Item
        key={this.props.initGeo}
        {...layout}
        validateStatus={FormErrors.validateStatus(
          form,
          name,
          errorMessage,
        )}
        required={required}
        help={
          FormErrors.displayableError(
            form,
            name,
            errorMessage,
          ) || hint
        }
        {...formLayour}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div id="map" className="MapFormItem"></div>
      </Form.Item>
    );
  }
}

MapFormItemNotFast.defaultProps = {
  layout: formItemLayout,
  required: false,
};

MapFormItemNotFast.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,

  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  size: PropTypes.string,
  layout: PropTypes.object,
  errorMessage: PropTypes.string,
  formItemProps: PropTypes.object,
  inputProps: PropTypes.object,
};

class MapFormItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      administrative_zone: null,
      loading: false,
    };
  }
  componentDidMount() {
    this.setState({
      administrative_zone: this.props.administrative_zone,
    });
  }
  componentDidUpdate = (prevProps) => {
    // Utilisation classique (pensez bien à comparer les props) :

    if (
      this.props.administrative_zone !==
      prevProps.administrative_zone
    ) {
      if (this.props.administrative_zone) {
        this.setState({
          administrative_zone:
            this.props.administrative_zone,
        });
      }
    }
  };
  render() {
    var { initGeo, administrative_zone, form } = this.state;

    var { form } = this.props;
    if (form) {
      return (
        <MapFormItemNotFast
          {...this.props}
          administrative_zone_child={administrative_zone}
        />
      );
    }
    return (
      <FastField
        name={this.props.name}
        render={({ form }) => (
          <MapFormItemNotFast {...this.props} form={form} />
        )}
      />
    );
  }
}

export default MapFormItem;
