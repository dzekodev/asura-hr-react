import SongsService from 'modules/songs/songsService';
import paginationAction from 'modules/shared/pagination/paginationAction';
import selectors from 'modules/songs/list/songsListSelectors';
import { i18n } from 'i18n';
import exporterFields from 'modules/songs/list/songsListExporterFields';

const prefix = 'SONGS_LIST';

export default paginationAction(
  prefix,
  SongsService.list,
  selectors,
  i18n('songs.exporterFileName'),
  exporterFields,
);
