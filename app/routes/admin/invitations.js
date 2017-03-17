import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    console.log('this.store.findAll', this.store.findAll('invitation'));
    return this.store.findAll('invitation');
  }
});
