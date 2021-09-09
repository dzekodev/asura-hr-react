import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';
import importerHoc from 'view/shared/importer/Importer';
import selectors from 'modules/customers/importer/customersImporterSelectors';
import actions from 'modules/customers/importer/customersImporterActions';
import fields from 'modules/customers/importer/customersImporterFields';

class customersImportPage extends Component {
  render() {
    const Importer = importerHoc(
      selectors,
      actions,
      fields,
      i18n('customers.importer.hint'),
    );

    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('customers.menu'), '/customers'],
            [i18n('customers.importer.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('customers.importer.title')}
          </PageTitle>

          <Importer />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(customersImportPage);
