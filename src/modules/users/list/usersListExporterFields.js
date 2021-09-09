import model from 'modules/users/usersModel';

const { fields } = model;

export default [
    fields.id,
    fields.name, 
    fields.email,
    fields.phone_number,
    fields.created_at,
    fields.updated_at,
];
