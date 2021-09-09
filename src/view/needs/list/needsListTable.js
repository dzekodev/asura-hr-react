import { Table, Popconfirm, Tag } from 'antd';
import { i18n } from 'i18n';
import actions from 'modules/needs/list/needsListActions';
import destroyActions from 'modules/needs/destroy/needsDestroyActions';
import selectors from 'modules/needs/list/needsListSelectors';
import destroySelectors from 'modules/needs/destroy/needsDestroySelectors';
import model from 'modules/needs/needsModel';
import needsSelectors from 'modules/needs/needsSelectors';
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

class NeedsListTable extends Component {
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
            to={`/needs/${record.id}`}
            title={i18n('common.viewing')}
          >
            <FolderViewOutlined />
          </Link>
          {this.props.hasPermissionToEdit && (
            <Link
              to={`/needs/${record.id}/edit`}
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
    fields.descriptiion.forTable(),
    fields.type.forTable(),
    fields.monthly_rate.forTable(),
    fields.status.forTable(),
    fields.created_at.forTable(),
    fields.updated_at.forTable(),
    fields.ended_at.forTable(),
    
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
      needsSelectors.selectPermissionToEdit(state),
    hasPermissionToDestroy:
      needsSelectors.selectPermissionToDestroy(state),
  };
}

export default connect(select)(NeedsListTable);
