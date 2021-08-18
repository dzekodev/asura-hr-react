import viewActions from 'modules/shared/view/viewActions';
import colorService from 'modules/color/colorService';

const prefix = 'COLOR_VIEW';

export default viewActions({
  prefix,
  findFn: colorService.find,
  redirectToOnError: '/color',
});
