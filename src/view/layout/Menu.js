import {
  Layout as AntLayout,
  Menu as AntMenu,
  Icon,
} from 'antd';
import React, { Component } from 'react';
import SiderWrapper from 'view/layout/styles/SiderWrapper';
import { Link } from 'react-router-dom';
import authSelectors from 'modules/auth/authSelectors';
import { connect } from 'react-redux';
import PermissionChecker from 'modules/auth/permissionChecker';
import actions from 'modules/layout/layoutActions';
import layoutSelectors from 'modules/layout/layoutSelectors';
import routes from 'view/routes';
import Logo from 'view/auth/styles/Logo';
const { Sider } = AntLayout;
const { SubMenu } = AntMenu;

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
  }

  componentDidMount() {
    this.toggleMenuOnResize();
    window.addEventListener(
      'resize',
      this.toggleMenuOnResize,
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      'resize',
      this.toggleMenuOnResize,
    );
  }

  toggleMenuOnResize = () => {
    window.innerWidth < 576
      ? this.hideMenu()
      : this.showMenu();
  };

  get selectedKeys() {
    const url = this.props.url;

    const match = routes.privateRoutes.find((option) => {
      if (option.menu.exact) {
        return url === option.path;
      }

      return url.startsWith(option.path);
    });

    if (match) {
      return [match.path];
    }

    return null;
  }

  hideMenu = () => {
    const { dispatch } = this.props;
    dispatch(actions.doHideMenu());
  };

  showMenu = () => {
    const { dispatch } = this.props;
    dispatch(actions.doShowMenu());
  };

  match = (permission) => {
    const permissionChecker = new PermissionChecker(
      this.props.currentUser,
    );

    return permissionChecker.match(permission);
  };

  render() {
    return (
      <SiderWrapper
        style={{
          display: this.props.menuVisible
            ? 'block'
            : 'none',
        }}
      >
        <Sider theme="light" trigger={null}>
          <div className="logo">
            <Logo>
              <img
                src="/images/logo.png"
                width={70}
                height={80}
                style={{ borderRadius: 5, marginTop: 30 }}
              />
            </Logo>

          </div>

          <AntMenu
            theme="light"
            mode="inline"
            selectedKeys={this.selectedKeys}
          >
            {routes.privateRoutes
              .filter((privateRoute) => !!privateRoute.menu)
              .filter((privateRoutes) =>
                this.match(
                  privateRoutes.permissionRequired,
                ),
              )
              .map((privateRoute) => {
                if (privateRoute.submenu) {
                  return (
                    <SubMenu
                      title={
                        <span>
                          {privateRoute.icon}
                          <span>{privateRoute.label}</span>
                        </span>
                      }
                      style={{
                        color: 'white',
                      }}
                    >
                      {privateRoute.submenu
                        .filter(
                          (subPrivateRoute) =>
                            !!subPrivateRoute.menu,
                        )
                        .filter((SubRoutes) =>
                          this.match(
                            SubRoutes.permissionRequired,
                          ),
                        )
                        .map((route) => (
                          <AntMenu.Item
                            key={route.path}
                            style={{
                              backgroundColor: '#89609e',
                            }}
                          >
                            <Link to={route.path}>
                              {route.icon}
                              <span>{route.label}</span>
                            </Link>
                          </AntMenu.Item>
                        ))}
                    </SubMenu>
                  );
                }

                return (
                  <AntMenu.Item key={privateRoute.path}>
                    <Link to={privateRoute.path}>
                      {privateRoute.icon}
                      <span>{privateRoute.label}</span>
                    </Link>
                  </AntMenu.Item>
                );
              })}
          </AntMenu>
        </Sider>
      </SiderWrapper>
    );
  }
}

const select = (state) => ({
  currentUser: authSelectors.selectCurrentUser(state),
  menuVisible: layoutSelectors.selectMenuVisible(state),
});

export default connect(select)(Menu);
