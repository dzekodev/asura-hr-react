import needsService from 'modules/needs/needsService';
import formActions from 'modules/shared/form/formActions';

const prefix = 'NEEDS_FORM';

export default formActions({
  prefix,
  createFn: needsService.create,
  createSuccessMessageI18nKey: 'needs.create.success',
  updateFn: needsService.update,
  updateSuccessMessageI18nKey: 'needs.update.success',
  findFn: needsService.find,
  redirectTo: '/needs',
});
