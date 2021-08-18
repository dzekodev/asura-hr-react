import destroyActions from 'modules/shared/destroy/destroyActions';
import listActions from 'modules/color/list/colorListActions';
import colorService from 'modules/color/colorService';

const prefix = 'color_DESTROY';

export default destroyActions({
  prefix,
  destroyAllFn: colorService.destroyAll,
  destroySuccessMessageI18nKey:
    'color.destroy.success',
  destroyAllSuccessMessageI18nKey:
    'color.destroyAll.success',
  redirectTo: '/color',
  listActions,
});
