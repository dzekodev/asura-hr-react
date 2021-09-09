import usersService from 'modules/users/usersService';
import formActions from 'modules/shared/form/formActions';

const prefix = 'USERS_FORM';

export default formActions({
  prefix,
  createFn: usersService.create,
  createSuccessMessageI18nKey: 'users.create.success',
  updateFn: usersService.update,
  updateSuccessMessageI18nKey: 'users.update.success',
  findFn: usersService.find,
  redirectTo: '/users',
});
