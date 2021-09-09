import model from 'modules/needs/needsModel';

const { fields } = model;

export default [
    fields.id,
    fields.descriptiion, 
    fields.type, 
    fields.monthly_rate,
    fields.status,
    fields.created_at,
    fields.updated_at,
    fields.ended_at,
];

