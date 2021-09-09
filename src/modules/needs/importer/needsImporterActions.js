import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/needs/importer/needsImporterSelectors';
import needsService from 'modules/needs/needsService';
import fields from 'modules/needs/importer/needsImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'needs',
  selectors,
  needsService.import,
  fields,
  i18n('needs.importer.fileName'),
);
