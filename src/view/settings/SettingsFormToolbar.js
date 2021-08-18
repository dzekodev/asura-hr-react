import { Button } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { i18n } from 'i18n';
import Toolbar from 'view/shared/styles/Toolbar';
import { connect } from 'react-redux';

class SettingsFormToolbar extends Component {
  render() {
    return <Toolbar></Toolbar>;
  }
}

function select(state) {
  return {};
}

export default connect(select)(SettingsFormToolbar);
