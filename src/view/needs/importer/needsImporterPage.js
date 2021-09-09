import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';
import importerHoc from 'view/shared/importer/Importer';
import selectors from 'modules/needs/importer/needsImporterSelectors';
import actions from 'modules/needs/importer/needsImporterActions';
import fields from 'modules/needs/importer/needsImporterFields';

class needsImportPage extends Component {
  render() {
    const Importer = importerHoc(
      selectors,
      actions,
      fields,
      i18n('needs.importer.hint'),
    );

    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('needs.menu'), '/needs'],
            [i18n('needs.importer.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('needs.importer.title')}
          </PageTitle>

          <Importer />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(needsImportPage);
