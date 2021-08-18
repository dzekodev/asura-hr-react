import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/color/importer/colorImporterSelectors';
import colorService from 'modules/color/colorService';
import fields from 'modules/color/importer/colorImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'color',
  selectors,
  colorService.import,
  fields,
  i18n('color.importer.fileName'),
);
