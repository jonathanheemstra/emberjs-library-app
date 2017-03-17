import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('library', params.library_id);
  },

  actions: {
    saveLibrary(newLibrary) {
      newLibrary.save()
      .then( () => {
        this.transitionTo('libraries');
      })
    },

    willTransition(transition) {
      let model = this.controller.get('model');

      if(model.get('hasDirtyAttributes')) {
        let confirmation = confirm('Your changes have not yet saved. Would you like to leave this form?');

        if(confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
