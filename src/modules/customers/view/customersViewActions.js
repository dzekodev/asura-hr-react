import viewActions from 'modules/shared/view/viewActions';
import customersService from 'modules/customers/customersService';

const prefix = 'CUSTOMERS_VIEW';

export default viewActions({
  prefix,
  findFn: customersService.find,
  redirectToOnError: '/customers',
});
