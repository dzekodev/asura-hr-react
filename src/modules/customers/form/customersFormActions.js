import customersService from 'modules/customers/customersService';
import formActions from 'modules/shared/form/formActions';

const prefix = 'CUSTOMERS_FORM';

export default formActions({
  prefix,
  createFn: customersService.create,
  createSuccessMessageI18nKey: 'customers.create.success',
  updateFn: customersService.update,
  updateSuccessMessageI18nKey: 'customers.update.success',
  findFn: customersService.find,
  redirectTo: '/customers',
});
