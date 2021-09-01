import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/songs/importer/songsImporterSelectors';
import songsService from 'modules/songs/songsService';
import fields from 'modules/songs/importer/songsImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'songs',
  selectors,
  songsService.import,
  fields,
  i18n('songs.importer.fileName'),
);
