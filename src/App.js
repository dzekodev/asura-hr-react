import { ConnectedRouter } from 'connected-react-router';
import { configureStore, getHistory } from 'modules/store';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import RoutesComponent from 'view/shared/routes/RoutesComponent';
import { ConfigProvider } from 'antd';
import { getAntdLanguage } from 'i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
require('dotenv').config();
const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <ConfigProvider locale={getAntdLanguage()}>
        <Provider store={store}>
          <ConnectedRouter history={getHistory()}>
            <RoutesComponent />
          </ConnectedRouter>
        </Provider>
      </ConfigProvider>
    );
  }
}
