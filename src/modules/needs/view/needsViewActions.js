import viewActions from 'modules/shared/view/viewActions';
import needsService from 'modules/needs/needsService';

const prefix = 'NEEDS_VIEW';

export default viewActions({
  prefix,
  findFn: needsService.find,
  redirectToOnError: '/needs',
});
