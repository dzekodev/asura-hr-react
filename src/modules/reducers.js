import { connectRouter } from 'connected-react-router';
import layout from 'modules/layout/layoutReducers';
import auth from 'modules/auth/authReducers';
import color from 'modules/color/colorReducers';
import customers from 'modules/customers/customersReducers';
import needs from 'modules/needs/needsReducers';

import settings from 'modules/settings/settingsReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    settings,
    color,
    customers,
    needs,
  });
