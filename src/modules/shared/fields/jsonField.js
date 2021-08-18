import GenericField from 'modules/shared/fields/genericField';
import * as yup from 'yup';

export default class JsonField extends GenericField {
  constructor(
    name,
    label,
    {
      required = false,

      parseExport = null,
      forFormCustom = undefined,
    } = {},
  ) {
    super(name, label);

    this.required = required;
    this.parseExport = parseExport;
    this.forFormCustom = forFormCustom;
  }
  forTable(overrides) {
    const defaultRender = undefined;

    const {
      title = this.label,
      sorter = false,
      dataIndex = this.name,
      render = defaultRender,
    } = overrides || {};

    return {
      title,
      sorter,
      dataIndex,
      render,
    };
  }

  forView(value) {
    return value;
  }

  forFormInitialValue(value) {
    return value;
  }

  forForm() {
    if (this.forFormCustom) {
      return this.forFormCustom();
    }

    let yupChain = yup.mixed().label(this.label);
    if (this.required) {
      yupChain = yupChain.required();
    }

    return yupChain;
  }

  forFilter() {
    let yupChain = yup.mixed().label(this.label);

    if (this.required) {
      yupChain = yupChain.required();
    }
    return yupChain;
  }

  forExport() {
    let yupChain = yup
      .mixed()
      .label(this.label)
      .transform((value, originalValue) => {
        if (!originalValue) {
          return '';
        }
        if (this.parseExport) {
          return this.parseExport(originalValue, value);
        }
        return JSON.stringify(originalValue, null, 2);
      });
    return yupChain;
  }

  forImport() {
    let yupChain = yup.mixed().label(this.label);
    return yupChain;
  }
}
