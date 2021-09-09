import { Button, Form } from 'antd';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import actions from 'modules/needs/form/needsFormActions';
import selectors from 'modules/needs/form/needsFormSelectors';
import model from 'modules/needs/needsModel';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import Spinner from 'view/shared/Spinner';
import FormWrapper, {
  tailFormItemLayout,
} from 'view/shared/styles/FormWrapper';
import FormSchema from 'view/shared/form/formSchema';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import InputNumberFormItem from 'view/shared/form/items/InputNumberFormItem';
import CheckboxFormItem from 'view/shared/form/items/CheckboxFormItem';
import TextAreaFormItem from 'view/shared/form/items/TextAreaFormItem';

const { fields } = model;

class needsForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.descriptiion,
    fields.type,
    fields.monthly_rate,
    fields.status,
    fields.ended_at,
  ]);

  componentDidMount() {
    const { dispatch, match } = this.props;

    if (this.isEditing()) {
      dispatch(actions.doFind(match.params.id));
    } else {
      dispatch(actions.doNew());
    }
  }

  isEditing = () => {
    const { match } = this.props;
    return !!match.params.id;
  };

  handleSubmit = (values) => {
    const { dispatch } = this.props;
    const { id, ...data } = this.schema.cast(values);

    if (this.isEditing()) {
      dispatch(actions.doUpdate(id, data));
    } else {
      dispatch(actions.doCreate(data));
    }
  };

  initialValues = () => {
    const record = this.props.record;
    if (this.isEditing() && record) {
      return this.schema.initialValues({
        id: record.id,
        descriptiion: record.descriptiion,
        type: record.type,
        monthly_rate: record.monthly_rate,
        status: record.status,
        created_at: record.created_at,
        updated_at: record.updated_at,
        ended_at: record.ended_at,
      });
    }

    return this.schema.initialValues();
  };

  renderForm() {
    const { saveLoading } = this.props;

    return (
      <FormWrapper>
        <Formik
          initialValues={this.initialValues()}
          validationSchema={this.schema.schema}
          onSubmit={this.handleSubmit}
          render={(form) => {
            return (
              <Form onSubmit={form.handleSubmit}>
                {this.isEditing() && (
                  <ViewFormItem
                    name={fields.id.name}
                    label={fields.id.label}
                  />
                )}
                <InputFormItem
                  name={fields.descriptiion.name}
                  label={fields.descriptiion.label}
                  required={fields.descriptiion.required}
                />
                <InputFormItem
                  name={fields.type.name}
                  label={fields.type.label}
                  required={fields.type.required}
                />
                <InputFormItem
                  name={fields.monthly_rate.name}
                  label={fields.monthly_rate.label}
                  required={fields.monthly_rate.required}
                />
                <InputFormItem
                  name={fields.status.name}
                  label={fields.status.label}
                  required={fields.status.required}
                />
                <InputFormItem
                  name={fields.ended_at.name}
                  label={fields.ended_at.label}
                  required={fields.ended_at.required}
                />

                <Form.Item
                  className="form-buttons"
                  {...tailFormItemLayout}
                >
                  <Button
                    loading={saveLoading}
                    type="primary"
                    htmlType="submit"
                    icon="save"
                  >
                    {i18n('common.save')}
                  </Button>

                  <Button
                    disabled={saveLoading}
                    onClick={form.handleReset}
                    icon="undo"
                  >
                    {i18n('common.reset')}
                  </Button>
                </Form.Item>
              </Form>
            );
          }}
        />
      </FormWrapper>
    );
  }

  render() {
    const { findLoading, record } = this.props;

    if (findLoading) {
      return <Spinner />;
    }

    if (this.isEditing() && !record) {
      return <Spinner />;
    }

    return this.renderForm();
  }
}

function select(state) {
  return {
    findLoading: selectors.selectFindLoading(state),
    saveLoading: selectors.selectSaveLoading(state),
    record: selectors.selectRecord(state),
  };
}

export default connect(select)(needsForm);
