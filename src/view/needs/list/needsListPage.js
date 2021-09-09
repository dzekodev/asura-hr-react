import React, { Component } from 'react';
import NeedsListFilter from 'view/needs/list/needsListFilter';
import NeedsListTable from 'view/needs/list/needsListTable';
import NeedsListToolbar from 'view/needs/list/needsListToolbar';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class NeedsListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('needs.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>{i18n('needs.list.title')}</PageTitle>

          <NeedsListToolbar />
          <NeedsListFilter />
          <NeedsListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(NeedsListPage);
