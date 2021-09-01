import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import SongsView from 'view/songs/view/songsView';
import { i18n } from 'i18n';
import actions from 'modules/songs/view/songsViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/songs/view/songsViewSelectors';
import SongsViewToolbar from 'view/songs/view/songsViewToolbar';

class songsPage extends Component {
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
            [i18n('songs.menu'), '/songs'],
            [i18n('songs.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>{i18n('songs.view.title')}</PageTitle>

          <SongsViewToolbar match={this.props.match} />

          <SongsView
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

export default connect(select)(Layout(songsPage));
