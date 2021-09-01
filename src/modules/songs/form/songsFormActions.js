import songsService from 'modules/songs/songsService';
import formActions from 'modules/shared/form/formActions';

const prefix = 'COLOR_FORM';

export default formActions({
  prefix,
  createFn: songsService.create,
  createSuccessMessageI18nKey: 'songs.create.success',
  updateFn: songsService.update,
  updateSuccessMessageI18nKey: 'songs.update.success',
  findFn: songsService.find,
  redirectTo: '/songs',
});
