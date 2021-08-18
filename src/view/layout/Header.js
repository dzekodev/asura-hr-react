import {
  Icon,
  Layout,
  Menu,
  Dropdown,
  Avatar,
  Button,
} from 'antd';
import {
  UserOutlined,
  MenuOutlined,
  FileProtectOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import authActions from 'modules/auth/authActions';
import authSelectors from 'modules/auth/authSelectors';
import layoutActions from 'modules/layout/layoutActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderWrapper from 'view/layout/styles/HeaderWrapper';
import layoutSelectors from 'modules/layout/layoutSelectors';
import { i18n } from 'i18n';
import I18nSelect from 'view/layout/I18nSelect';
import { getHistory } from 'modules/store';

const { Header: AntHeader } = Layout;

class Header extends Component {
  doSignout = () => {
    const { dispatch } = this.props;
    dispatch(authActions.doSignout());
  };

  doNavigateToProfile = () => {
    getHistory().push('/profile');
  };

  doNavigateToEditPass = () => {
    getHistory().push('/editpassword');
  };

  doToggleMenu = () => {
    const { dispatch } = this.props;
    dispatch(layoutActions.doToggleMenu());
  };

  userMenu = (
    <Menu selectedKeys={[]}>
      <Menu.Item
        onClick={this.doNavigateToProfile}
        key="userCenter"
      >
        <UserOutlined />
        {i18n('auth.profile.title')}
      </Menu.Item>

      <Menu.Item
        onClick={this.doNavigateToEditPass}
        key="userPassword"
      >
        <FileProtectOutlined />
        {i18n('auth.editpassword.title')}
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item onClick={this.doSignout} key="logout">
        <LogoutOutlined />
        {i18n('auth.signout')}
      </Menu.Item>
    </Menu>
  );

  render() {
    var { RoleName } = this.props;
    return (
      <HeaderWrapper>
        <AntHeader>
          <MenuOutlined
            onClick={this.doToggleMenu}
            className="trigger"
          />

          <div className="header-right">
            <span className="i18n-select">
              <I18nSelect />
            </span>

            <Dropdown
              className="user-dropdown user-dropdown-content"
              overlay={this.userMenu}
              trigger={['click']}
            >
              <span>
                <Avatar
                  className="user-dropdown-avatar"
                  size="small"
                  src={
                    this.props.userDropdownAvatar ||
                    undefined
                  }
                  icon={<UserOutlined />}
                  alt="avatar"
                />

                <span className="user-dropdown-text">
                  <span>{this.props.userDropdownText}</span>
                  <span className="role">{RoleName}</span>
                </span>
              </span>
            </Dropdown>
          </div>
        </AntHeader>
      </HeaderWrapper>
    );
  }
}

const select = (state) => ({
  menuVisible: layoutSelectors.selectMenuVisible(state),
  userDropdownText:
    authSelectors.selectCurrentUserNameOrEmailPrefix(state),
  userDropdownAvatar:
    authSelectors.selectCurrentUserAvatar(state),
  RoleName: authSelectors.selectRolesName(state),
});

export default connect(select)(Header);
