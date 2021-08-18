import colorService from 'modules/color/colorService';
import formActions from 'modules/shared/form/formActions';

const prefix = 'COLOR_FORM';

export default formActions({
  prefix,
  createFn: colorService.create,
  createSuccessMessageI18nKey:
    'color.create.success',
  updateFn: colorService.update,
  updateSuccessMessageI18nKey:
    'color.update.success',
  findFn: colorService.find,
  redirectTo: '/color',
});
