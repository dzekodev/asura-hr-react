import React, { Component } from 'react';
import SongsListFilter from 'view/songs/list/songsListFilter';
import SongsListTable from 'view/songs/list/songsListTable';
import SongsListToolbar from 'view/songs/list/songsListToolbar';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class songsListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('songs.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>{i18n('songs.list.title')}</PageTitle>

          <SongsListToolbar />
          <SongsListFilter />
          <SongsListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(songsListPage);
