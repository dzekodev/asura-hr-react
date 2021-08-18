import React, { Component } from 'react';
import { Form, Select, Tooltip, Cascader } from 'antd';
import { formItemLayout } from 'view/shared/styles/FormWrapper';
import PropTypes from 'prop-types';
import FormErrors from 'view/shared/form/formErrors';
import { FastField } from 'formik';
import { InfoCircleOutlined } from '@ant-design/icons';

class CascaderFormItemNotFast extends Component {
  _value = () => {
    var {
      name,
      form,
      dynamic,
      type,
      options,
      index,
      readName,
    } = this.props;
    if (
      type === 'enumerator' &&
      form.values[name] != undefined
    ) {
      let value = options.filter(
        (item) => item.value == form.values[name],
      );
      return value[0].label;
    }

    if (dynamic) {
      return this.props.values;
    }

    if (
      readName &&
      form.values[name] &&
      form.values[name].hasOwnProperty(readName)
    ) {
      let outPut = form.values[name];
      return outPut[readName];
    } else if (
      form.values[name] &&
      (form.values[name].name || form.values[name].label)
    ) {
      return (
        form.values[name].name || form.values[name].label
      );
    } else {
      return form.values[name];
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
      placeholder,
      options,
      mode,
      autoFocus,
      autoComplete,
      prefix,
      formItemProps,
      inputProps,
      errorMessage,
      required,
      info,
      dynamic,
      index,
      onChange,
      disabled,
    } = this.props;
    var suffix = null;
    if (info != undefined) {
      suffix = (
        <Tooltip title={info}>
          <InfoCircleOutlined />
        </Tooltip>
      );
    }

    return (
      <Form.Item
        {...layout}
        label={label}
        labelAlign="left"
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
        {...formItemProps}
      >
        <Cascader
          id={name}
          onChange={(value) => {
            if (dynamic) {
              onChange(value);
            } else {
              form.setFieldValue(name, value);
            }
          }}
          options={options}
          onBlur={() => form.setFieldTouched(name)}
          value={this._value()}
          size={size || undefined}
          placeholder={placeholder || undefined}
          autoFocus={autoFocus || false}
          autoComplete={autoComplete || undefined}
          prefix={prefix || undefined}
          mode={mode || undefined}
          suffix={suffix}
          allowClear={placeholder ? false : true}
          disabled={disabled ? true : false}
          {...inputProps}
        />
      </Form.Item>
    );
  }
}

CascaderFormItemNotFast.defaultProps = {
  layout: formItemLayout,
  required: false,
};

CascaderFormItemNotFast.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
  size: PropTypes.string,
  prefix: PropTypes.string,
  placeholder: PropTypes.string,
  layout: PropTypes.object,
  errorMessage: PropTypes.string,
  formItemProps: PropTypes.object,
  inputProps: PropTypes.object,
  mode: PropTypes.string,
};

class CascaderFormItem extends Component {
  constructor(props) {
    super(props);
    this.state = { option: null };
  }

  render() {
    let { name } = this.props;
    return this.props.options == null ? (
      <div />
    ) : (
      <FastField
        name={name}
        render={({ form }) => (
          <CascaderFormItemNotFast
            {...this.props}
            options={this.props.options || []}
            form={form}
          />
        )}
      />
    );
  }
}

export default CascaderFormItem;
