import React, { Component } from 'react';
import { Form, DatePicker, Tooltip } from 'antd';
import { formItemLayout } from 'view/shared/styles/FormWrapper';
import PropTypes from 'prop-types';
import FormErrors from 'view/shared/form/formErrors';
import { FastField } from 'formik';
import { InfoCircleOutlined } from '@ant-design/icons';

class DatePickerFormItemNotFast extends Component {
  render() {
    const {
      label,
      name,
      form,
      hint,
      layout,
      autoFocus,
      showTime,
      formItemProps,
      inputProps,
      required,
      info,
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
        required={required}
        validateStatus={FormErrors.validateStatus(
          form,
          name,
        )}
        help={
          FormErrors.displayableError(form, name) || hint
        }
        {...formItemProps}
      >
        <DatePicker
          id={name}
          onChange={(value) =>
            form.setFieldValue(name, value)
          }
          value={form.values[name]}
          autoFocus={autoFocus || false}
          style={{ width: '100%' }}
          showTime={
            showTime ? { format: 'YYYY-MM-DD' } : undefined
          }
          format={showTime ? 'YYYY-MM-DD' : undefined}
          {...inputProps}
          suffix={suffix}
        />
      </Form.Item>
    );
  }
}

DatePickerFormItemNotFast.defaultProps = {
  layout: formItemLayout,
  showTime: false,
  required: false,
};

DatePickerFormItemNotFast.propTypes = {
  showTime: PropTypes.bool,
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  hint: PropTypes.string,
  label: PropTypes.string,
  autoFocus: PropTypes.bool,
  layout: PropTypes.object,
  formItemProps: PropTypes.object,
  inputProps: PropTypes.object,
  required: PropTypes.bool,
};

class YMDDatePickerFormItem extends Component {
  render() {
    return (
      <FastField
        name={this.props.name}
        render={({ form }) => (
          <DatePickerFormItemNotFast
            {...this.props}
            form={form}
          />
        )}
      />
    );
  }
}

export default YMDDatePickerFormItem;
