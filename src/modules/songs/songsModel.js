import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import StringField from 'modules/shared/fields/stringField';
import IntegerField from 'modules/shared/fields/integerField';
import BooleanField from 'modules/shared/fields/booleanField';
import IntegerRangeField from 'modules/shared/fields/integerRangeField';
import JsonField from 'modules/shared/fields/jsonField';

function label(name) {
  return i18n(`songs.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`songs.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  name: new StringField('name', label('name'), {
    required: true,
  }),
  composedBy: new StringField(
    'composedBy',
    label('composedBy'),
    {
      required: true,
    },
  ),
};

export default {
  fields,
};
