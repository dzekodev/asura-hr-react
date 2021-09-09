import { Table, Popconfirm, Tag } from 'antd';
import { i18n } from 'i18n';
import actions from 'modules/customers/list/customersListActions';
import destroyActions from 'modules/customers/destroy/customersDestroyActions';
import selectors from 'modules/customers/list/customersListSelectors';
import destroySelectors from 'modules/customers/destroy/customersDestroySelectors';
import model from 'modules/customers/customersModel';
import customersSelectors from 'modules/customers/customersSelectors';
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

class customersListTable extends Component {
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
            to={`/customers/${record.id}`}
            title={i18n('common.viewing')}
          >
            <FolderViewOutlined />
          </Link>
          {this.props.hasPermissionToEdit && (
            <Link
              to={`/customers/${record.id}/edit`}
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
    fields.name.forTable(),
    fields.email.forTable(),
    fields.phone_number.forTable(),
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
      customersSelectors.selectPermissionToEdit(state),
    hasPermissionToDestroy:
      customersSelectors.selectPermissionToDestroy(state),
  };
}

export default connect(select)(customersListTable);
