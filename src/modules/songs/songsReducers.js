import list from 'modules/songs/list/songsListReducers';
import form from 'modules/songs/form/songsFormReducers';
import view from 'modules/songs/view/songsViewReducers';
import destroy from 'modules/songs/destroy/songsDestroyReducers';
import importerReducer from 'modules/songs/importer/songsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
