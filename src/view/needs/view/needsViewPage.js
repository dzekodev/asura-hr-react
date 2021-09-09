import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import NeedsView from 'view/needs/view/needsView';
import { i18n } from 'i18n';
import actions from 'modules/needs/view/needsViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/needs/view/needsViewSelectors';
import NeedsViewToolbar from 'view/needs/view/needsViewToolbar';

class needsPage extends Component {
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
            [i18n('needs.menu'), '/needs'],
            [i18n('needs.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>{i18n('needs.view.title')}</PageTitle>

          <NeedsViewToolbar match={this.props.match} />

          <NeedsView
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

export default connect(select)(Layout(needsPage));
