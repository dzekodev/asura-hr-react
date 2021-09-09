import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import UsersView from 'view/users/view/usersView';
import { i18n } from 'i18n';
import actions from 'modules/users/view/usersViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/users/view/usersViewSelectors';
import UsersViewToolbar from 'view/users/view/usersViewToolbar';

class usersPage extends Component {
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
            [i18n('users.menu'), '/users'],
            [i18n('users.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>{i18n('users.view.title')}</PageTitle>

          <UsersViewToolbar match={this.props.match} />

          <UsersView
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

export default connect(select)(Layout(usersPage));
