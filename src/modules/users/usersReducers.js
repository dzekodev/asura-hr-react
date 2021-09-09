import list from 'modules/users/list/usersListReducers';
import form from 'modules/users/form/usersFormReducers';
import view from 'modules/users/view/usersViewReducers';
import destroy from 'modules/users/destroy/usersDestroyReducers';
import importerReducer from 'modules/users/importer/usersImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
