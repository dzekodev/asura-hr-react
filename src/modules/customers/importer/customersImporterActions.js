import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/customers/importer/customersImporterSelectors';
import customersService from 'modules/customers/customersService';
import fields from 'modules/customers/importer/customersImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'customers',
  selectors,
  customersService.import,
  fields,
  i18n('customers.importer.fileName'),
);
