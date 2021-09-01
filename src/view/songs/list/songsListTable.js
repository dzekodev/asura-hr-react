import { Table, Popconfirm, Tag } from 'antd';
import { i18n } from 'i18n';
import actions from 'modules/songs/list/songsListActions';
import destroyActions from 'modules/songs/destroy/songsDestroyActions';
import selectors from 'modules/songs/list/songsListSelectors';
import destroySelectors from 'modules/songs/destroy/songsDestroySelectors';
import model from 'modules/songs/songsModel';
import songsSelectors from 'modules/songs/songsSelectors';
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

class songsListTable extends Component {
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
            to={`/songs/${record.id}`}
            title={i18n('common.viewing')}
          >
            <FolderViewOutlined />
          </Link>
          {this.props.hasPermissionToEdit && (
            <Link
              to={`/songs/${record.id}/edit`}
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
    fields.composedBy.forTable(),
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
      songsSelectors.selectPermissionToEdit(state),
    hasPermissionToDestroy:
      songsSelectors.selectPermissionToDestroy(state),
  };
}

export default connect(select)(songsListTable);
