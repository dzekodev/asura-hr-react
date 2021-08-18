import ColorService from 'modules/color/colorService';
import paginationAction from 'modules/shared/pagination/paginationAction';
import selectors from 'modules/color/list/colorListSelectors';
import { i18n } from 'i18n';
import exporterFields from 'modules/color/list/colorListExporterFields';

const prefix = 'COLOR_LIST';

export default paginationAction(
  prefix,
  ColorService.list,
  selectors,
  i18n('color.exporterFileName'),
  exporterFields,
);
