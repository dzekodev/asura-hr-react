import { Table, Popconfirm, Tag } from 'antd';
import { i18n } from 'i18n';
import actions from 'modules/users/list/usersListActions';
import destroyActions from 'modules/users/destroy/usersDestroyActions';
import selectors from 'modules/users/list/usersListSelectors';
import destroySelectors from 'modules/users/destroy/usersDestroySelectors';
import model from 'modules/users/usersModel';
import usersSelectors from 'modules/users/usersSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'view/shared/styles/TableWrapper';
import ButtonLink from 'view/shared/styles/ButtonLink';
import {
  EditOutlined,
  DeleteOutlined,
  FolderViewOutlined,
} from '@ant-design/icons';
const { fields } = model;

class usersListTable extends Component {
  handleTableChange = (pagination, filters, sorter) => {
    const { dispatch } = this.props;

    dispatch(
      actions.doChangePaginationAndSort(pagination, sorter),
    );
  };

  doDestroy = (id) => {
    const { dispatch } = this.props;
    dispatch(destroyActions.doDestroy(id));
  };

  columns = [
    {
      title: '',
      dataIndex: '',
      width: '80px',
      render: (_, record) => (
        <div className="table-actions">
          <Link
            to={`/users/${record.id}`}
            title={i18n('common.viewing')}
          >
            <FolderViewOutlined />
          </Link>
          {this.props.hasPermissionToEdit && (
            <Link
              to={`/users/${record.id}/edit`}
              title={i18n('common.editing')}
            >
              <EditOutlined />
            </Link>
          )}
          {this.props.hasPermissionToDestroy && (
            <Popconfirm
              title={i18n('common.areYouSure')}
              onConfirm={() => this.doDestroy(record.id)}
              okText={i18n('common.yes')}
              cancelText={i18n('common.no')}
            >
              <ButtonLink title={i18n('common.destroying')}>
                <DeleteOutlined />
              </ButtonLink>
            </Popconfirm>
          )}
        </div>
      ),
    },
    fields.id.forTable(),
    fields.display_name.forTable(),
    fields.first_name.forTable(),
    fields.last_name.forTable(),
    fields.gender.forTable(),
    fields.email.forTable(),
    fields.phone.forTable(),
    fields.last_seen.forTable(),
    fields.created_at.forTable(),
    fields.updated_at.forTable(),
  ];

  rowSelection = () => {
    return {
      selectedRowKeys: this.props.selectedKeys,
      onChange: (selectedRowKeys) => {
        const { dispatch } = this.props;
        dispatch(actions.doChangeSelected(selectedRowKeys));
      },
    };
  };

  render() {
    const { pagination, rows, count, loading } = this.props;

    return (
      <TableWrapper>
        <Table
          rowKey="id"
          loading={loading}
          columns={this.columns}
          dataSource={rows}
          pagination={pagination}
          onChange={this.handleTableChange}
          rowSelection={this.rowSelection()}
          scroll={{ x: true }}
        />
      </TableWrapper>
    );
  }
}

function select(state) {
  return {
    loading:
      selectors.selectLoading(state) ||
      destroySelectors.selectLoading(state),
    rows: selectors.selectRows(state),
    count: selectors.selectCount(state),
    pagination: selectors.selectPagination(state),
    filter: selectors.selectFilter(state),
    selectedKeys: selectors.selectSelectedKeys(state),
    hasPermissionToEdit:
      usersSelectors.selectPermissionToEdit(state),
    hasPermissionToDestroy:
      usersSelectors.selectPermissionToDestroy(state),
  };
}

export default connect(select)(usersListTable);
