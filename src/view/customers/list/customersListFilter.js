import {
  Button,
  Collapse,
  Col,
  Form,
  Row,
  Card,
} from 'antd';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import actions from 'modules/customers/list/customersListActions';
import selectors from 'modules/customers/list/customersListSelectors';
import model from 'modules/customers/customersModel';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FilterWrapper, {
  formItemLayout,
} from 'view/shared/styles/FilterWrapper';
import FormFilterSchema from 'view/shared/form/formFilterSchema';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import CheckboxFormItem from 'view/shared/form/items/CheckboxFormItem';

const { fields } = model;
const { Panel } = Collapse;
const schema = new FormFilterSchema([fields.name]);

class customersListFilter extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.doFetch(this.initialFilter()));
  }

  initialFilter = () => {
    return schema.initialValues(
      { ...this.props.filter },
      this.props.location,
    );
  };

  handleSubmit = (values) => {
    const valuesToSubmit = schema.cast(values);
    const { dispatch } = this.props;
    dispatch(actions.doFetch(valuesToSubmit));
  };

  handleReset = (form) => {
    form.setValues({});
    const { dispatch } = this.props;
    dispatch(actions.doReset());
  };

  render() {
    const { loading } = this.props;

    return (
      <FilterWrapper>
        <Collapse expandIconPosition="right">
          <Panel header={i18n('common.filters')} key="1">
            <Formik
              initialValues={this.initialFilter()}
              validationSchema={schema.schema}
              onSubmit={this.handleSubmit}
              render={(form) => {
                return (
                  <Form onSubmit={form.handleSubmit}>
                    <Row gutter={24}>
                      <Col md={24} lg={12}>
                        <InputFormItem
                          name={fields.name.name}
                          label={fields.name.label}
                          layout={formItemLayout}
                        />
                      </Col>
                      <Col md={24} lg={12}>
                        <InputFormItem
                          name={fields.email.name}
                          label={fields.email.label}
                          layout={formItemLayout}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        className="filter-buttons"
                        span={24}
                      >
                        <Button
                          loading={loading}
                          icon="search"
                          type="primary"
                          htmlType="submit"
                        >
                          {i18n('common.search')}
                        </Button>
                        <Button
                          loading={loading}
                          onClick={() =>
                            this.handleReset(form)
                          }
                          icon="undo"
                        >
                          {i18n('common.reset')}
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                );
              }}
            />
          </Panel>
        </Collapse>
      </FilterWrapper>
    );
  }
}

function select(state) {
  return {
    filter: selectors.selectFilter(state),
  };
}

export default withRouter(connect(select)(customersListFilter));
