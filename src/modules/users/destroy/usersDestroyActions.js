import destroyActions from 'modules/shared/destroy/destroyActions';
import listActions from 'modules/users/list/usersListActions';
import usersService from 'modules/users/usersService';

const prefix = 'users_DESTROY';

export default destroyActions({
  prefix,
  destroyAllFn: usersService.destroyAll,
  destroySuccessMessageI18nKey: 'users.destroy.success',
  destroyAllSuccessMessageI18nKey:
    'users.destroyAll.success',
  redirectTo: '/users',
  listActions,
});
