import React, { Component } from 'react';
import ColorListFilter from 'view/color/list/colorListFilter';
import ColorListTable from 'view/color/list/colorListTable';
import ColorListToolbar from 'view/color/list/colorListToolbar';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class colorListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('color.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('color.list.title')}
          </PageTitle>

          <ColorListToolbar />
          <ColorListFilter />
          <ColorListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(colorListPage);
