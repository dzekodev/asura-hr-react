import { Button, Form, Modal, Input } from 'antd';

import { Formik } from 'formik';
import actions from 'modules/auth/authActions';
import model from 'modules/auth/userModel';
import selectors from 'modules/auth/authSelectors';
import { i18n } from 'i18n';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImagesFormItem from 'view/shared/form/items/ImagesFormItem';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import FormSchema from 'view/shared/form/formSchema';
import Message from 'view/shared/message';
import { Link } from 'react-router-dom';
import { formItemLayout } from 'view/shared/styles/FormWrapper';

import FormWrapper, {
  tailFormItemLayout,
} from 'view/shared/styles/FormWrapper';

const { fields } = model;

class ProfileFormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      new_email: '',
      code_token: '',
    };
  }

  schema = new FormSchema(fields.id, [
    fields.email,
    fields.first_name,
    fields.last_name,
    fields.phone,
    fields.avatar_url,
    fields.new_email,
  ]);

  componentDidMount() {
    var { avatar_url } = this.props;
  }
  handleSubmit = (values) => {
    const { dispatch } = this.props;
    dispatch(
      actions.doUpdateProfile(
        values.first_name,
        values.last_name,
        values.phone,
        values.avatar_url,
      ),
    );
  };

  initialValues = () => {
    const currentUser = this.props.currentUser;

    return this.schema.initialValues({
      phone: currentUser.phone,
      avatar_url: null,
      email: currentUser.email,
      first_name: currentUser.first_name,
      last_name: currentUser.last_name,
    });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };

  handle_init_update_email = () => {
    var { new_email } = this.state;
    var { dispatch } = this.props;
    dispatch(actions.doSendInitUpdateEmail(new_email));
  };
  handle_update_email = () => {
    var { code_token } = this.state;
    var { dispatch } = this.props;
    dispatch(actions.doSendUpdateEmail(code_token));
    this.setState({ visible: false });
  };
  renderForm() {
    const {
      saveLoading,
      layout,
      showInputCode,
      loading,
    } = this.props;
    return (
      <FormWrapper>
        <Formik
          initialValues={this.initialValues()}
          validationSchema={this.schema.schema}
          onSubmit={this.handleSubmit}
          render={(form) => {
            return (
              <Form onSubmit={form.handleSubmit}>
                <ViewFormItem
                  name={fields.email.name}
                  label={fields.email.label}
                />

                <InputFormItem
                  name={fields.first_name.name}
                  label={fields.first_name.label}
                  autoComplete={fields.first_name.name}
                />
                <InputFormItem
                  name={fields.last_name.name}
                  label={fields.last_name.label}
                  autoComplete={fields.last_name.name}
                />
                <InputFormItem
                  name={fields.phone.name}
                  label={fields.phone.label}
                  autoComplete={fields.phone.name}
                />

                {/*<ImagesFormItem
                  name={fields.avatar_url.name}
                  label={fields.avatar_url.label}
                  path={fields.avatar_url.path(
                    this.props.currentUser.id,
                  )}
                  schema={{
                    size: fields.avatar_url.size,
                  }}
                  max={fields.avatar_url.max}
                />*/}

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
    return this.renderForm();
  }
}

function select(state) {
  return {
    saveLoading: selectors.selectLoadingUpdateProfile(
      state,
    ),
    currentUser: selectors.selectCurrentUser(state),
    avatar_url: selectors.selectCurrentUserAvatar(state),
    showInputCode: selectors.selectShowInputCode(state),
    loading: selectors.selectLoadingEmailConfirmation(
      state,
    ),
  };
}

ProfileFormPage.defaultProps = {
  layout: formItemLayout,
};
export default connect(select)(ProfileFormPage);
