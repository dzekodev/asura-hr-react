import UsersService from 'modules/users/usersService';
import paginationAction from 'modules/shared/pagination/paginationAction';
import selectors from 'modules/users/list/usersListSelectors';
import { i18n } from 'i18n';
import exporterFields from 'modules/users/list/usersListExporterFields';

const prefix = 'USERS_LIST';

export default paginationAction(
  prefix,
  UsersService.list,
  selectors,
  i18n('users.exporterFileName'),
  exporterFields,
);
