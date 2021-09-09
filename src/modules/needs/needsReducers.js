import list from 'modules/needs/list/needsListReducers';
import form from 'modules/needs/form/needsFormReducers';
import view from 'modules/needs/view/needsViewReducers';
import destroy from 'modules/needs/destroy/needsDestroyReducers';
import importerReducer from 'modules/needs/importer/needsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
