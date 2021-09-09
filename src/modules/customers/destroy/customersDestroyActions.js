import destroyActions from 'modules/shared/destroy/destroyActions';
import listActions from 'modules/customers/list/customersListActions';
import customersService from 'modules/customers/customersService';

const prefix = 'customers_DESTROY';

export default destroyActions({
  prefix,
  destroyAllFn: customersService.destroyAll,
  destroySuccessMessageI18nKey: 'customers.destroy.success',
  destroyAllSuccessMessageI18nKey:
    'customers.destroyAll.success',
  redirectTo: '/customers',
  listActions,
});
