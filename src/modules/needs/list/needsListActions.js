import needsService from 'modules/needs/needsService';
import paginationAction from 'modules/shared/pagination/paginationAction';
import selectors from 'modules/needs/list/needsListSelectors';
import { i18n } from 'i18n';
import exporterFields from 'modules/needs/list/needsListExporterFields';

const prefix = 'NEEDS_LIST';

export default paginationAction(
  prefix,
  needsService.list,
  selectors,
  i18n('needs.exporterFileName'),
  exporterFields,
);
