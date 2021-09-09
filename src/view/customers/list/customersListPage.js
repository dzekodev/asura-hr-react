import React, { Component } from 'react';
import CustomersListFilter from 'view/customers/list/customersListFilter';
import CustomersListTable from 'view/customers/list/customersListTable';
import CustomersListToolbar from 'view/customers/list/customersListToolbar';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class customersListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('customers.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>{i18n('customers.list.title')}</PageTitle>

          <CustomersListToolbar />
          <CustomersListFilter />
          <CustomersListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(customersListPage);
