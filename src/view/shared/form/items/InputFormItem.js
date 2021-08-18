import React, { Component } from 'react';
import { Form, Input, Tooltip } from 'antd';
import { formItemLayout } from 'view/shared/styles/FormWrapper';
import PropTypes from 'prop-types';
import FormErrors from 'view/shared/form/formErrors';
import { InfoCircleOutlined } from '@ant-design/icons';
import { FastField } from 'formik';

export class InputFormItemNotFast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onFocus: false,
      data: '',
    };
  }
  _values = () => {
    const { dynamic, form, name, values } = this.props;
    if (dynamic) {
      return this.state.data;
    } else {
      return form.values ? form.values[name] : '';
    }
  };

  componentDidMount() {
    const { values } = this.props;
    this.setState({ data: values });
  }

  handleChange = (value) => {
    const { dynamic, onChange, form } = this.props;
    if (dynamic) {
      if (this.state.onFocus) {
        this.setState({ data: value.target.value });
      }
    } else {
      form.handleChange(value);
    }
  };

  render() {
    const {
      label,
      name,
      form,
      hint,
      layout,
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
      dynamic,
      onChange,
      values,
      suffix,
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
        <Input
          id={name}
          type={type}
          onChange={this.handleChange}
          onFocus={() => {
            if (dynamic) {
              this.setState({ onFocus: true });
            }
          }}
          onBlur={() => {
            if (dynamic) {
              this.setState({ onFocus: false });
              onChange(this.state.data);
            } else {
              return form.handleBlur;
            }
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
      </Form.Item>
    );
  }
}

InputFormItemNotFast.defaultProps = {
  layout: formItemLayout,
  type: 'text',
  required: false,
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
  prefix: PropTypes.string,
  placeholder: PropTypes.string,
  layout: PropTypes.object,
  errorMessage: PropTypes.string,
  formItemProps: PropTypes.object,
  inputProps: PropTypes.object,
};

class InputFormItem extends Component {
  render() {
    return (
      <FastField
        name={this.props.name}
        render={({ form }) => (
          <InputFormItemNotFast
            {...this.props}
            form={form}
          />
        )}
      />
    );
  }
}

export default InputFormItem;
