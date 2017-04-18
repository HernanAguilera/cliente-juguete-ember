import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    console.log(payload);
    payload = { noticias: payload };
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
