import ExporterSchema from 'modules/shared/exporter/exporterSchema';
import { Excel } from 'modules/shared/excel/excel';
import { mapKeys } from 'lodash';
import moment from 'moment-timezone';

import { i18n } from 'i18n';

export default class Exporter {
  constructor(fields, excelFileName) {
    this.schema = new ExporterSchema(fields);
    this.excelFileName = excelFileName;
  }

  transformAndExportAsExcelFile(rows) {
    const exportableData = rows.map((row) => {
      const rowCasted = this.schema.cast(row);
      return this._makeNameHeadersIntoLabels(rowCasted);
    });
    let date = new Date().getTime();
    return Excel.exportAsExcelFile(
      exportableData,
      this.schema.labels,
      this.excelFileName +
        '_' +
        moment(date).format('YYYY-MM-DD-HH-mm'),
    );
  }

  transformAndExportAsExcelFileAnalysisRequest(rows) {
    try {
      var exportableData = rows.map((row) => {
        const rowCasted = this.schema.cast(row);
        return this._makeNameHeadersIntoLabels(rowCasted);
      });

      let date = new Date().getTime();
      return Excel.exportAsExcelFile(
        exportableData,
        this.schema.labels,
        this.excelFileName +
          '_' +
          moment(date).format('YYYY-MM-DD-HH-mm'),
      );
    } catch (e) {
      console.log(e);
    }
  }
  _makeNameHeadersIntoLabels(row) {
    return mapKeys(row, (value, key) => {
      return this.schema.labelOf(key);
    });
  }
}
