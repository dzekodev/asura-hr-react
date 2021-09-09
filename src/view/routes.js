import React from 'react';
import Permissions from 'security/permissions';
import { i18n } from 'i18n';
import {
  SettingOutlined,
  CarOutlined,
  DashboardOutlined,
  CustomerServiceOutlined,
  PullRequestOutlined,
  EnvironmentOutlined,
  SolutionOutlined,
  ExperimentOutlined,
  BorderOuterOutlined,
  UserOutlined,
  BlockOutlined,
  TableOutlined,
  CodeSandboxOutlined,
} from '@ant-design/icons';
const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    icon: <DashboardOutlined />,
    label: i18n('home.dashboard'),
    menu: {
      exact: true,
    },
    loader: () => import('view/home/HomePage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
    menu: false,
  },
  {
    path: '/account_setting',
    loader: () => import('view/auth/AccountSetting'),
    permissionRequired: null,
    exact: true,
    icon: <SettingOutlined />,
    label: i18n('auth.menu'),
    menu: false,
  },
  {
    path: '/editpassword',
    loader: () =>
      import('view/auth/ProfileFormEditPasswordPage'),
    permissionRequired: null,
    exact: true,
    menu: false,
  },
  {
    path: '/editpassword',
    loader: () =>
      import('view/auth/ProfileFormEditPasswordPage'),
    permissionRequired: null,
    exact: true,
    menu: false,
  },

  {
    path: '/color',
    loader: () => import('view/color/list/colorListPage'),
    permissionRequired: permissions.colorRead,
    exact: true,
    icon: <CarOutlined />,
    label: i18n('color.menu'),
    menu: false,
  },
  {
    path: '/color/new',
    loader: () => import('view/color/form/colorFormPage'),
    menu: false,
    permissionRequired: permissions.colorCreate,
    exact: true,
  },
  {
    path: '/color/importer',
    loader: () =>
      import('view/color/importer/colorImporterPage'),
    menu: false,
    permissionRequired: permissions.colorImport,
    exact: true,
  },
  {
    path: '/color/:id/edit',
    loader: () => import('view/color/form/colorFormPage'),
    menu: false,
    permissionRequired: permissions.colorEdit,
    exact: true,
  },
  {
    path: '/color/:id',
    loader: () => import('view/color/view/colorViewPage'),
    menu: false,
    permissionRequired: permissions.colorRead,
    exact: true,
  },
  
  {
    path: '/customers',
    loader: () => import('view/customers/list/customersListPage'),
    permissionRequired: permissions.customersRead,
    exact: true,
    icon: <CustomerServiceOutlined />,
    label: i18n('customers.menu'),
    menu: {
      exact: true,
    },
  },
  {
    path: '/customers/new',
    loader: () => import('view/customers/form/customersFormPage'),
    menu: false,
    permissionRequired: permissions.customersCreate,
    exact: true,
  },
  {
    path: '/customers/importer',
    loader: () =>
      import('view/customers/importer/customersImporterPage'),
    menu: false,
    permissionRequired: permissions.customersImport,
    exact: true,
  },
  {
    path: '/customers/:id/edit',
    loader: () => import('view/customers/form/customersFormPage'),
    menu: false,
    permissionRequired: permissions.customersEdit,
    exact: true,
  },
  {
    path: '/customers/:id',
    loader: () => import('view/customers/view/customersViewPage'),
    menu: false,
    permissionRequired: permissions.colorRead,
    exact: true,
  },
  
  
  {
    path: '/needs',
    loader: () => import('view/needs/list/needsListPage'),
    permissionRequired: permissions.needsRead,
    exact: true,
    icon: <BlockOutlined />,
    label: i18n('needs.menu'),
    menu: {
      exact: true,
    },
  },
  {
    path: '/needs/new',
    loader: () => import('view/needs/form/needsFormPage'),
    menu: false,
    permissionRequired: permissions.needsCreate,
    exact: true,
  },
  {
    path: '/needs/importer',
    loader: () =>
      import('view/needs/importer/needsImporterPage'),
    menu: false,
    permissionRequired: permissions.needsImport,
    exact: true,
  },
  {
    path: '/needs/:id/edit',
    loader: () => import('view/needs/form/needsFormPage'),
    menu: false,
    permissionRequired: permissions.needsEdit,
    exact: true,
  },
  {
    path: '/needs/:id',
    loader: () => import('view/needs/view/needsViewPage'),
    menu: false,
    permissionRequired: permissions.colorRead,
    exact: true,
  },
  
  {
    path: '/users',
    loader: () => import('view/users/list/usersListPage'),
    permissionRequired: permissions.usersRead,
    exact: true,
    icon: <UserOutlined />,
    label: i18n('users.menu'),
    menu: {
      exact: true,
    },
  },
  {
    path: '/users/new',
    loader: () => import('view/users/form/usersFormPage'),
    menu: false,
    permissionRequired: permissions.usersCreate,
    exact: true,
  },
  {
    path: '/users/importer',
    loader: () =>
      import('view/users/importer/usersImporterPage'),
    menu: false,
    permissionRequired: permissions.usersImport,
    exact: true,
  },
  {
    path: '/users/:id/edit',
    loader: () => import('view/users/form/usersFormPage'),
    menu: false,
    permissionRequired: permissions.usersEdit,
    exact: true,
  },
  {
    path: '/users/:id',
    loader: () => import('view/users/view/usersViewPage'),
    menu: false,
    permissionRequired: permissions.colorRead,
    exact: true,
  },
];

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('view/auth/SigninPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () => import('view/auth/ForgotPasswordPage'),
  },
  {
    path: '/auth/forgot-password/code',
    loader: () =>
      import('view/auth/ForgotPasswordPageCode'),
  },
  {
    path: '/auth/forgot-password/new-password',
    loader: () =>
      import('view/auth/ForgotPasswordPageReset'),
  },
];

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () => import('view/auth/EmptyPermissionsPage'),
  },
];

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () => import('view/auth/EmailUnverifiedPage'),
  },
];

const errorRoutes = [
  {
    path: '/403',
    loader: () => import('view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () => import('view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () => import('view/shared/errors/Error404Page'),
  },
];

export default {
  privateRoutes,
  publicRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  errorRoutes,
};
