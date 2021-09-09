import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import CustomersView from 'view/customers/view/customersView';
import { i18n } from 'i18n';
import actions from 'modules/customers/view/customersViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/customers/view/customersViewSelectors';
import CustomersViewToolbar from 'view/customers/view/customersViewToolbar';

class customersPage extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(actions.doFind(match.params.id));
  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('customers.menu'), '/customers'],
            [i18n('customers.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>{i18n('customers.view.title')}</PageTitle>

          <CustomersViewToolbar match={this.props.match} />

          <CustomersView
            loading={this.props.loading}
            record={this.props.record}
          />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

function select(state) {
  return {
    loading: selectors.selectLoading(state),
    record: selectors.selectRecord(state),
  };
}

export default connect(select)(Layout(customersPage));
