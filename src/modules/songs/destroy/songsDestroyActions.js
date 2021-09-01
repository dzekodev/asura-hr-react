import destroyActions from 'modules/shared/destroy/destroyActions';
import listActions from 'modules/songs/list/songsListActions';
import songsService from 'modules/songs/songsService';

const prefix = 'songs_DESTROY';

export default destroyActions({
  prefix,
  destroyAllFn: songsService.destroyAll,
  destroySuccessMessageI18nKey: 'songs.destroy.success',
  destroyAllSuccessMessageI18nKey:
    'songs.destroyAll.success',
  redirectTo: '/songs',
  listActions,
});
