import React, { Component } from 'react';
import {
  Form,
  Input,
  Tooltip,
  Select,
  InputNumber,
  Col,
  Row,
} from 'antd';
import { formItemLayout } from 'view/shared/styles/FormWrapper';
import PropTypes from 'prop-types';
import FormErrors from 'view/shared/form/formErrors';
import { InfoCircleOutlined } from '@ant-design/icons';
import { FastField } from 'formik';

const { Option } = Select;

export class InputFormItemNotFast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onFocus: false,
      input: '',
      select: '',
      options: [],
    };
  }

  _values = () => {
    const { dynamic, form, name, values } = this.props;

    return form.values[name]
      ? form.values[name].input
      : null;
  };

  handleChange = (value) => {
    const { form, name, unit } = this.props;
    form.setFieldValue(name, {
      input: value,
      option: unit,
    });
  };

  render() {
    const {
      label,
      name,
      form,
      hint,
      layout,
      Options,
      size,
      type,
      placeholder,
      autoFocus,
      autoComplete,
      prefix,
      formItemProps,
      inputProps,
      errorMessage,
      required,
      info,
      inputType,
      dynamic,
      unit,
      onChange,
      values,
      suffix,
      options,
      defaultOption,
      disableSelect = false,
    } = this.props;

    var suffixs = suffix;

    if (info != undefined && suffix == undefined) {
      suffixs = (
        <Tooltip title={info}>
          <InfoCircleOutlined />
        </Tooltip>
      );
    }

    return (
      <Form.Item
        {...layout}
        label={label}
        required={required}
        validateStatus={FormErrors.validateStatus(
          form,
          name,
          errorMessage,
        )}
        help={
          FormErrors.displayableError(
            form,
            name,
            errorMessage,
          ) || hint
        }
        {...formItemProps}
      >
        <Input.Group size="large">
          <Row>
            {inputType === 'number' ? (
              <Col span={22}>
                <InputNumber
                  style={{ width: '100%' }}
                  id={name}
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                  onBlur={form.handleBlur}
                  value={this._values()}
                  size={size || undefined}
                  placeholder={placeholder || undefined}
                  autoFocus={autoFocus || false}
                  autoComplete={autoComplete || undefined}
                  prefix={prefix || undefined}
                  {...inputProps}
                  suffix={suffix}
                />
              </Col>
            ) : (
              <Col span={22}>
                <Input
                  id={name}
                  type={type}
                  onChange={(e) => {
                    this.handleChange({
                      input: e.target.value,
                    });
                  }}
                  value={this._values()}
                  size={size || undefined}
                  placeholder={placeholder || undefined}
                  autoFocus={autoFocus || false}
                  autoComplete={autoComplete || undefined}
                  prefix={prefix || undefined}
                  {...inputProps}
                  suffix={suffixs}
                />
              </Col>
            )}
            <Col span={2}>
              <Input value={unit} disabled={true} />
            </Col>
          </Row>
        </Input.Group>
      </Form.Item>
    );
  }
}

InputFormItemNotFast.defaultProps = {
  layout: formItemLayout,
  type: 'text',
  required: false,
  unit: 'T',
};

InputFormItemNotFast.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  size: PropTypes.string,
  unit: PropTypes.string,
  prefix: PropTypes.string,
  placeholder: PropTypes.string,
  layout: PropTypes.object,
  errorMessage: PropTypes.string,
  formItemProps: PropTypes.object,
  inputProps: PropTypes.object,
};

class InputFormItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localUnit: 'T',
    };
  }
  componentDidMount() {
    this.setState({ localUnit: this.props.unit });
  }
  componentDidUpdate(prevProps) {
    // Utilisation classique (pensez bien à comparer les props) :
    if (this.props.unit !== prevProps.unit) {
      this.setState({ localUnit: this.props.unit });
    }
  }
  render() {
    return (
      <InputFormItemNotFast
        {...this.props}
        unit={this.state.localUnit}
      />
    );
  }
}

export default InputFormItem;
