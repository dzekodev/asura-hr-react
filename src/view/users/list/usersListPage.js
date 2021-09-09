import React, { Component } from 'react';
import UsersListFilter from 'view/users/list/usersListFilter';
import UsersListTable from 'view/users/list/usersListTable';
import UsersListToolbar from 'view/users/list/usersListToolbar';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class usersListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('users.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>{i18n('users.list.title')}</PageTitle>

          <UsersListToolbar />
          <UsersListFilter />
          <UsersListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(usersListPage);
