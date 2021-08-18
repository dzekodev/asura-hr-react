import React, { Component } from 'react';
import { Form, Tooltip } from 'antd';
import { formItemLayout } from 'view/shared/styles/FormWrapper';
import PropTypes from 'prop-types';
import FormErrors from 'view/shared/form/formErrors';
import { FastField } from 'formik';
import { InfoCircleOutlined } from '@ant-design/icons';

import L from 'leaflet';
import 'leaflet-draw';
import 'leaflet-draw/dist/leaflet.draw.css';

class MapViewItem extends Component {
  constructor(props) {
    super(props);
    this.map = null;
  }

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

  componentDidMount = () => {
    const { value, index } = this.props;
    // create map
    this.map = L.map(`map_${index}`, {
      center: [31.791702, -7.09262],
      zoom: 6,
      maxZoom: 16,
      minZoom: 6,
      layers: [
        L.tileLayer(
          'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
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

    var drawControl = new L.Control.Draw(drawPluginOptions);
    this.map.addControl(drawControl);

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
      this.SetField();
    });
  };

  render() {
    var { index } = this.props;

    return (
      <div
        id="mapUI"
        style={{ height: '100%', width: '100%' }}
      >
        <div
          id={`map_${index}`}
          style={{ height: '100%', width: '100%' }}
        />
      </div>
    );
  }
}

export default MapViewItem;
