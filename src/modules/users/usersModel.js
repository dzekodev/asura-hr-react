import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import StringField from 'modules/shared/fields/stringField';
import IntegerField from 'modules/shared/fields/integerField';
import BooleanField from 'modules/shared/fields/booleanField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import IntegerRangeField from 'modules/shared/fields/integerRangeField';
import JsonField from 'modules/shared/fields/jsonField';

function label(display_name) {
  return i18n(`users.fields.${display_name}`);
}

function enumeratorLabel(display_name, value) {
  return i18n(`users.enumerators.${display_name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  display_name: new StringField('display_name', label('display_name'), {
    required: true,
  }),
  first_name: new StringField('first_name', label('first_name')),
  last_name: new StringField('last_name', label('last_name')),
  gender: new IdField('gender', label('gender')),
  email: new StringField(
    'email',
    label('email'),
    {
      required: true,
    },
  ),
  phone: new StringField(
    'phone',
    label('phone'),
    {
      required: true,
    },
  ),
  last_seen: new DateTimeField('last_seen',label('last_seen'),),
  created_at: new DateTimeField('created_at',label('created_at'),),
  updated_at: new DateTimeField('updated_at',label('updated_at'),),
};

export default {
  fields,
};
