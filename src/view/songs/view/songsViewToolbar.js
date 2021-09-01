import { Button, Popconfirm } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { i18n } from 'i18n';
import Toolbar from 'view/shared/styles/Toolbar';
import { connect } from 'react-redux';
import songsSelectors from 'modules/songs/songsSelectors';
import destroySelectors from 'modules/songs/destroy/songsDestroySelectors';
import destroyActions from 'modules/songs/destroy/songsDestroyActions';

class songsViewToolbar extends Component {
  id = () => {
    return this.props.match.params.id;
  };

  doDestroy = () => {
    const { dispatch } = this.props;
    dispatch(destroyActions.doDestroy(this.id()));
  };

  render() {
    const {
      hasPermissionToEdit,
      hasPermissionToDestroy,
      destroyLoading,
    } = this.props;

    return (
      <Toolbar>
        {hasPermissionToEdit && (
          <Link to={`/songs/${this.id()}/edit`}>
            <Button type="primary" icon="edit">
              {i18n('common.edit')}
            </Button>
          </Link>
        )}

        {hasPermissionToDestroy && (
          <Popconfirm
            title={i18n('common.areYouSure')}
            onConfirm={() => this.doDestroy()}
            okText={i18n('common.yes')}
            cancelText={i18n('common.no')}
          >
            <Button
              type="primary"
              icon="delete"
              disabled={destroyLoading}
            >
              {i18n('common.destroy')}
            </Button>
          </Popconfirm>
        )}
      </Toolbar>
    );
  }
}

function select(state) {
  return {
    hasPermissionToEdit:
      songsSelectors.selectPermissionToEdit(state),
    hasPermissionToDestroy:
      songsSelectors.selectPermissionToDestroy(state),
    destroyLoading: destroySelectors.selectLoading(state),
  };
}

export default connect(select)(songsViewToolbar);
