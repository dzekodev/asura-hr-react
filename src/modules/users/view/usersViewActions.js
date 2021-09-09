import viewActions from 'modules/shared/view/viewActions';
import usersService from 'modules/users/usersService';

const prefix = 'USERS_VIEW';

export default viewActions({
  prefix,
  findFn: usersService.find,
  redirectToOnError: '/users',
});
