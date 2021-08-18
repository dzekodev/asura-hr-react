import { i18n } from 'i18n';

import StringArrayField from 'modules/shared/fields/stringArrayField';
import * as yup from 'yup';

export default class PasswordValideField extends StringArrayField {
  forFormInitialValue(value) {
    return value;
  }

  forForm() {
    let yupChain = yup.string().when('password', {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf(
          [yup.ref('password')],
          i18n('auth.passwordReset.errorIdentical'),
        ),
    });

    if (this.required) {
      yupChain = yupChain.required();
    }

    return yupChain;
  }
}
