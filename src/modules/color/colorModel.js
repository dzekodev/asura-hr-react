import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import StringField from 'modules/shared/fields/stringField';
import IntegerField from 'modules/shared/fields/integerField';
import BooleanField from 'modules/shared/fields/booleanField';
import IntegerRangeField from 'modules/shared/fields/integerRangeField';
import JsonField from 'modules/shared/fields/jsonField';

function label(name) {
  return i18n(`color.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`color.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  name: new StringField('name', label('name'), {     required: true,   }),
  code: new StringField('code', label('code'), {     required: true,   }),
      
};

export default {
  fields,
};
