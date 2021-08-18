import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import ColorView from 'view/color/view/colorView';
import { i18n } from 'i18n';
import actions from 'modules/color/view/colorViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/color/view/colorViewSelectors';
import ColorViewToolbar from 'view/color/view/colorViewToolbar';

class colorPage extends Component {
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
            [i18n('color.menu'), '/color'],
            [i18n('color.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('color.view.title')}
          </PageTitle>

          <ColorViewToolbar match={this.props.match} />

          <ColorView
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

export default connect(select)(Layout(colorPage));
