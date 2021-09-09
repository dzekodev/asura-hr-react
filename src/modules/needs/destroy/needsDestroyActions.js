import destroyActions from 'modules/shared/destroy/destroyActions';
import listActions from 'modules/needs/list/needsListActions';
import needsService from 'modules/needs/needsService';

const prefix = 'needs_DESTROY';

export default destroyActions({
  prefix,
  destroyAllFn: needsService.destroyAll,
  destroySuccessMessageI18nKey: 'needs.destroy.success',
  destroyAllSuccessMessageI18nKey:
    'needs.destroyAll.success',
  redirectTo: '/needs',
  listActions,
});
