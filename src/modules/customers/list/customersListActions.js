import CustomersService from 'modules/customers/customersService';
import paginationAction from 'modules/shared/pagination/paginationAction';
import selectors from 'modules/customers/list/customersListSelectors';
import { i18n } from 'i18n';
import exporterFields from 'modules/customers/list/customersListExporterFields';

const prefix = 'CUSTOMERS_LIST';

export default paginationAction(
  prefix,
  CustomersService.list,
  selectors,
  i18n('customers.exporterFileName'),
  exporterFields,
);
