import model from 'modules/songs/songsModel';
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

class songsView extends Component {
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
              label={fields.name.label}
              value={fields.name.forView(record.name)}
            />
            <TextViewItem
              label={fields.composedBy.label}
              value={fields.composedBy.forView(record.code)}
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

export default songsView;
