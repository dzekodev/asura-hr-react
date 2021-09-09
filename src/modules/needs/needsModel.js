import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import StringField from 'modules/shared/fields/stringField';
import IntegerField from 'modules/shared/fields/integerField';
import BooleanField from 'modules/shared/fields/booleanField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import IntegerRangeField from 'modules/shared/fields/integerRangeField';
import JsonField from 'modules/shared/fields/jsonField';

function label(name) {
  return i18n(`needs.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`needs.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  descriptiion: new StringField('descriptiion', label('descriptiion'), {
    required: true,
  }),
  type: new StringField(
    'type',
    label('type')
  ),

  monthly_rate: new StringField(
    'monthly_rate',
    label('monthly_rate')
  ),
  status: new StringField(
    'status',
    label('status')
  ),
  created_at: new DateTimeField('created_at',label('created_at'),),
  updated_at: new DateTimeField('updated_at',label('updated_at'),),
  ended_at: new DateTimeField('ended_at',label('ended_at'),),

  
};

export default {
  fields,
};
