import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:8000/api',
  header: {
    'Accept': 'application/json'
  },
  pathForType: function () {
    return 'noticias/';
  }
});
