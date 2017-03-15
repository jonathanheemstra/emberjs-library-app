import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

  isDisabled: Ember.computed.not('isValid'),

  emailAddressChanged: Ember.observer('emailAddress', function() {
    console.log('observer is called', this.get('emailAddress'));
  }),

  actualEmailAddress: Ember.computed('emailAddress', function() {
    console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
  }),

  actions: {
    saveInvitation() {
      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);

      // NOTE: the first param in the this.set() method must be the same as the name given in the {{#if}}{{/if}} conditional in the templates/index.hbs
      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  }

  // NOTE: Alternative longhanded ways of determining if a form is filled in or not
    // isDisabled: Ember.computed.empty('emailAddress'),
    // isDisabled: Ember.computed('emailAddress', function() {
    //   return this.get('emailAddress') === '';
    // })
});
