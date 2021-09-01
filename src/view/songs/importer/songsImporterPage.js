import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';
import importerHoc from 'view/shared/importer/Importer';
import selectors from 'modules/songs/importer/songsImporterSelectors';
import actions from 'modules/songs/importer/songsImporterActions';
import fields from 'modules/songs/importer/songsImporterFields';

class songsImportPage extends Component {
  render() {
    const Importer = importerHoc(
      selectors,
      actions,
      fields,
      i18n('songs.importer.hint'),
    );

    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('songs.menu'), '/songs'],
            [i18n('songs.importer.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('songs.importer.title')}
          </PageTitle>

          <Importer />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(songsImportPage);
