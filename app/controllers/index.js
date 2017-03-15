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

  // **** Alternative longhanded ways of determining if a form is filled in or not ****
  // isDisabled: Ember.computed.empty('emailAddress'),
  // isDisabled: Ember.computed('emailAddress', function() {
  //   return this.get('emailAddress') === '';
  // })
});
