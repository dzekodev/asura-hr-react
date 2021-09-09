import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/users/importer/usersImporterSelectors';
import usersService from 'modules/users/usersService';
import fields from 'modules/users/importer/usersImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'users',
  selectors,
  usersService.import,
  fields,
  i18n('users.importer.fileName'),
);
