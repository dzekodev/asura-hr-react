import React from 'react';
import Permissions from 'security/permissions';
import { i18n } from 'i18n';
import {
  SettingOutlined,
  UserAddOutlined,
  CarOutlined,
  DashboardOutlined,
  PullRequestOutlined,
  EnvironmentOutlined,
  SolutionOutlined,
  ExperimentOutlined,
  BorderOuterOutlined,
  UserOutlined,
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
    path: '/songs',
    loader: () => import('view/songs/list/songsListPage'),
    permissionRequired: permissions.songsRead,
    exact: true,
    icon: <CarOutlined />,
    label: i18n('songs.menu'),
    menu: {
      exact: true,
    },
  },
  {
    path: '/songs/new',
    loader: () => import('view/songs/form/songsFormPage'),
    menu: false,
    permissionRequired: permissions.songsCreate,
    exact: true,
  },
  {
    path: '/songs/importer',
    loader: () =>
      import('view/songs/importer/songsImporterPage'),
    menu: false,
    permissionRequired: permissions.songsImport,
    exact: true,
  },
  {
    path: '/songs/:id/edit',
    loader: () => import('view/songs/form/songsFormPage'),
    menu: false,
    permissionRequired: permissions.songsEdit,
    exact: true,
  },
  {
    path: '/songs/:id',
    loader: () => import('view/songs/view/songsViewPage'),
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
    path: '/auth/signup',
    loader: () => import('view/auth/SignupPage'),
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
