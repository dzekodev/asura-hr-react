import model from 'modules/users/usersModel';
import { Tabs, List } from 'antd';
import TableWrapper from 'view/shared/styles/TableWrapper';

import {
  InfoCircleOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';

const { fields } = model;
const { TabPane } = Tabs;

class usersView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <ViewWrapper>
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                <InfoCircleOutlined />
                Informations générales
              </span>
            }
            key="1"
          >
            <TextViewItem
              label={fields.id.label}
              value={fields.id.forView(record.id)}
            />

            <TextViewItem
              label={fields.display_name.label}
              value={fields.display_name.forView(record.display_name)}
            />
            <TextViewItem
              label={fields.first_name.label}
              value={fields.first_name.forView(record.first_name)}
            />
            <TextViewItem
              label={fields.last_name.label}
              value={fields.last_name.forView(record.last_name)}
            />
            <TextViewItem
              label={fields.gender.label}
              value={fields.gender.forView(record.gender)}
            />
            <TextViewItem
              label={fields.email.label}
              value={fields.email.forView(record.email)}
            />
            <TextViewItem
              label={fields.phone.label}
              value={fields.phone.forView(record.phone)}
            />
            <TextViewItem
              label={fields.last_seen.label}
              value={fields.last_seen.forView(record.last_seen)}
            />
            <TextViewItem
              label={fields.created_at.label}
              value={fields.created_at.forView(record.created_at)}
            />
            <TextViewItem
              label={fields.updated_at.label}
              value={fields.updated_at.forView(record.updated_at)}
            />
          </TabPane>
        </Tabs>
      </ViewWrapper>
    );
  }

  render() {
    const { record, loading } = this.props;

    if (loading || !record) {
      return <Spinner />;
    }

    return this.renderView();
  }
}

export default usersView;
