import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload.data = [];
    console.log(payload);
    // payload.data.attributes.amount = payload.data.attributes.cost.amount;
    // payload.data.attributes.currency = payload.data.attributes.cost.currency;
    //
    // delete payload.data.attributes.cost;
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
