import viewActions from 'modules/shared/view/viewActions';
import songsService from 'modules/songs/songsService';

const prefix = 'COLOR_VIEW';

export default viewActions({
  prefix,
  findFn: songsService.find,
  redirectToOnError: '/songs',
});
