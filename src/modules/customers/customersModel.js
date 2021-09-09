import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import StringField from 'modules/shared/fields/stringField';
import IntegerField from 'modules/shared/fields/integerField';
import BooleanField from 'modules/shared/fields/booleanField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import IntegerRangeField from 'modules/shared/fields/integerRangeField';
import JsonField from 'modules/shared/fields/jsonField';
import StringArrayField from 'modules/shared/fields/stringArrayField';
import * as yup from 'yup';


class EmailsField extends StringArrayField {
  forForm() {
    let yupChain = yup
      .array()
      .label(this.label)
      .of(
        yup
          .string()
          .email(i18n('user.validations.email'))
          .label(i18n('user.fields.email'))
          .max(255)
          .required(),
      );

    if (this.required) {
      yupChain = yupChain.required();
    }

    return yupChain;
  }
}
function label(name) {
  return i18n(`customers.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`customers.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  name: new StringField('name', label('name'), {
    required: true,
  }),
  email: new EmailsField(
    'email',
    label('email'),
    {
      required: true,
    },
  ),

  phone_number: new StringField(
    'phone_number',
    label('phone_number'),
    {
      required: true,
    },
  ),
  created_at: new DateTimeField('created_at',label('created_at'),),
  updated_at: new DateTimeField('updated_at',label('updated_at'),),
};

export default {
  fields,
};
