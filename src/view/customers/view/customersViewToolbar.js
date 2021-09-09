import { Button, Popconfirm } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { i18n } from 'i18n';
import Toolbar from 'view/shared/styles/Toolbar';
import { connect } from 'react-redux';
import customersSelectors from 'modules/customers/customersSelectors';
import destroySelectors from 'modules/customers/destroy/customersDestroySelectors';
import destroyActions from 'modules/customers/destroy/customersDestroyActions';

class customersViewToolbar extends Component {
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
          <Link to={`/customers/${this.id()}/edit`}>
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
      customersSelectors.selectPermissionToEdit(state),
    hasPermissionToDestroy:
      customersSelectors.selectPermissionToDestroy(state),
    destroyLoading: destroySelectors.selectLoading(state),
  };
}

export default connect(select)(customersViewToolbar);
