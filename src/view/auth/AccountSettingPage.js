import { Button, Form, Card } from 'antd';
import { Formik } from 'formik';
import actions from 'modules/auth/authActions';
import authService from 'modules/auth/authService';

import model from 'modules/auth/userModel';
import selectors from 'modules/auth/authSelectors';
import { i18n } from 'i18n';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectFormItem from 'view/shared/form/items/SelectFormItem';

import FormSchema from 'view/shared/form/formSchema';
import Message from 'view/shared/message';

import FormWrapper, {
  tailFormItemLayout,
} from 'view/shared/styles/FormWrapper';

const { fields } = model;

class AccountSettingPage extends Component {
  constructor(props) {
    super(props);
    this.state = { errMsg: null };
  }
  schema = new FormSchema(fields.id, []);

  handleSubmit = (values) => {
    const { dispatch } = this.props;
    dispatch(
      actions.doUpdateAccountSetting(
        values.language,
        values.timezone,
      ),
    );
    Message.success(i18n(`entities.ad.isMutual.success`));
  };

  initialValues = () => {
    const currentUser = this.props.currentUser;

    return this.schema.initialValues();
  };
  getErreurMsg = () => {
    return this.props.errorMessage;
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
                <Card
                  title={i18n('auth.accountSeting.title')}
                  bordered={false}
                ></Card>

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
    errorMessage: selectors.selectErrorMessage(state),

    currentUser: selectors.selectCurrentUser(state),
  };
}

export default connect(select)(AccountSettingPage);
