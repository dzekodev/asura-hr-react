import list from 'modules/color/list/colorListReducers';
import form from 'modules/color/form/colorFormReducers';
import view from 'modules/color/view/colorViewReducers';
import destroy from 'modules/color/destroy/colorDestroyReducers';
import importerReducer from 'modules/color/importer/colorImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
