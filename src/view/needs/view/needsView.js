import model from 'modules/needs/needsModel';
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

class needsView extends Component {
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
              label={fields.descriptiion.label}
              value={fields.descriptiion.forView(record.descriptiion)}
            />
            <TextViewItem
              label={fields.type.label}
              value={fields.type.forView(record.type)}
            />
            <TextViewItem
              label={fields.monthly_rate.label}
              value={fields.monthly_rate.forView(record.monthly_rate)}
            />
            <TextViewItem
              label={fields.status.label}
              value={fields.status.forView(record.status)}
            />
            <TextViewItem
              label={fields.created_at.label}
              value={fields.created_at.forView(record.created_at)}
            />
            <TextViewItem
              label={fields.updated_at.label}
              value={fields.updated_at.forView(record.updated_at)}
            />
            <TextViewItem
              label={fields.ended_at.label}
              value={fields.ended_at.forView(record.ended_at)}
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

export default needsView;
