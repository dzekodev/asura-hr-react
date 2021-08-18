import React, { Component } from 'react';
import { Form, Select, Tooltip, Button } from 'antd';
import { formItemLayout } from 'view/shared/styles/FormWrapper';
import PropTypes from 'prop-types';
import FormErrors from 'view/shared/form/formErrors';
import { FastField } from 'formik';
import ClassroomSelectFormItem from 'view/classroom/autocomplete/classroomSelectFormItem';
import InputFormItem from './InputFormItem';
import { InfoCircleOutlined } from '@ant-design/icons';
class SelectFormItemNotFast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [],
      loading: false,
    }
  }
  _value = () => {
    var { name, form, type, options } = this.props;


    if (
      type == 'enumerator' &&
      form.values[name] != undefined
    ) {
      let value = options.filter(
        (item) => item.value == form.values[name],
      );
      return value[0].label;
    }

    return form.values[name] != null &&
      form.values[name].name != null
      ? form.values[name].name
      : form.values[name];
  };

  addElement = (e) => {
    var { name, form, type } = this.props;
    let elements = form.values[name];
    if (type == "input") {
      this.setState({loading: true});
      elements.push("");
      form.setFieldValue(name, elements);
      this.setState({loading: false});
    } else {
      let indexDuplicate = elements.find(item => e == item);
      if(indexDuplicate == undefined || form.values[name].length == 0) {
        this.setState({loading: true});
        elements.push(e);
        form.setFieldValue(name, elements);
        this.setState({loading: false});
      }
    }
  };
  
  updateElement = (e, index) => {
    var { name, form } = this.props;
    var elements = form.values[name];
    let indexDuplicate = elements.find(item => e == item);
    if(indexDuplicate == undefined || form.values[name].length == 0) {
      this.setState({loading: true});
      elements[index] = e;
      form.setFieldValue(name, elements);
      setTimeout(() => this.setState({loading: false}), 1)
    }
  };

  handleRemove = (index) => {
    var { name, form } = this.props;
    this.setState({loading: true});
    let elements = form.values[name];
    let newData = elements.filter((item, i) => i != index)
    // elements.splice(index, 1);
    form.setFieldValue(name, newData);
    setTimeout(() => this.setState({loading: false}), 1)
  }


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
      type,
      required,
      info,
      element,
    } = this.props;
    var { loading } = this.state;

    if (loading){
      return <div></div>;
    }

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
        {
          type == "classroom" &&
          (
            <div>
              {
                form.values[name].map((item, index) => {
                  return (
                    <div key={index}>
                      <ClassroomSelectFormItem
                        index={index}
                        name={name}
                        required={required}
                        placeholder={label}
                        dynamic={true}
                        onChange={(data) => {
                          this.updateElement(data, index);
                        }}
                        values={item}
                        element={element}
                        update={form.setFieldValue}
                      />
                      <Button
                        onClick={(e) => this.handleRemove(index)}
                        type="danger"
                        icon="delete"
                      >
                      </Button>
                    </div>
                  );
                })
              }
              <ClassroomSelectFormItem
                name={name}
                required={required}
                placeholder={label}
                dynamic={true}
                element={element}
                onChange={this.addElement}
                update={form.setFieldValue}
              />
            </div>
          )
        }
        {
          type == "input" &&
          (
            <div>
              {
                form.values[name].map((item, index) => {
                  return (
                    <div key={index}>
                      <InputFormItem
                        index={index}
                        name={name}
                        required={required}
                        placeholder={label}
                        dynamic={true}
                        values={item}
                        onChange={(data) => {
                          this.updateElement(data, index);
                        }}
                      />
                      <Button
                        onClick={(e) => this.handleRemove(index)}
                        type="danger"
                        icon="delete"
                      >
                      </Button>
                    </div>
                  );
                })
              }
              <Button
                onClick={(e) => this.addElement(e)}
                type="primary"
                icon="plus"
                style={{ textAlign: "right" }}
              >
              </Button>
            </div>
          )
        }
        
        
      </Form.Item>
    );
  }
}

SelectFormItemNotFast.defaultProps = {
  layout: formItemLayout,
  required: false,
};

SelectFormItemNotFast.propTypes = {
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

class SelectFormItem extends Component {
  constructor() {
    super();
    this.state = { option: null };
  }

  render() {
    let { name } = this.props;
    return (
      <FastField
        name={name}
        render={({ form }) => (
          <SelectFormItemNotFast
            {...this.props}
            options={this.props.options || []}
            form={form}
          />
        )}
      />
    );
  }
}

export default SelectFormItem;
