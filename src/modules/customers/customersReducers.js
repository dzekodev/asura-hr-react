import list from 'modules/customers/list/customersListReducers';
import form from 'modules/customers/form/customersFormReducers';
import view from 'modules/customers/view/customersViewReducers';
import destroy from 'modules/customers/destroy/customersDestroyReducers';
import importerReducer from 'modules/customers/importer/customersImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
