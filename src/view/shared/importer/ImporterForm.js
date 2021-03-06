import { Form, Icon } from 'antd';
import Dragger from 'antd/lib/upload/Dragger';
import {
  EXCEL_EXTENSION,
  EXCEL_TYPE,
} from 'modules/shared/excel/excel';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { i18n } from 'i18n';
import { InboxOutlined } from '@ant-design/icons';
import FormWrapper, {
  formItemLayout,
} from 'view/shared/styles/FormWrapper';

export default (selectors, actions) => {
  class ImporterForm extends Component {
    handleRequest = (request) => {
      const file = request.file;
      const { dispatch } = this.props;
      dispatch(actions.doImport(file));
    };

    render() {
      return (
        <FormWrapper style={{ paddingLeft: 0 }}>
          <Form.Item
            help={this.props.errorMessage}
            validateStatus={
              this.props.errorMessage ? 'error' : 'success'
            }
            {...formItemLayout}
          >
            <Dragger
              showUploadList={false}
              accept={`${EXCEL_TYPE}, ${EXCEL_EXTENSION}`}
              customRequest={this.handleRequest}
              name="file"
            >
              <p className="ant-upload-drag-icon">
              <InboxOutlined/>
              </p>
              <p className="ant-upload-text">
                {i18n('importer.form.hint')}
              </p>
            </Dragger>
          </Form.Item>
        </FormWrapper>
      );
    }
  }

  function select(state) {
    return {
      errorMessage: selectors.selectErrorMessage(state),
    };
  }

  return connect(select)(ImporterForm);
};
