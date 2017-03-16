import Ember from 'ember';

export default Ember.Controller.extend({
  headerMessage: 'Coming Soon',
  emailAddress: '',
  responseMessage: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

  isDisabled: Ember.computed.not('isValid'),

  actions: {
    saveInvitation() {
      const email = this.get('emailAddress');
      const newInvitation = this.store.createRecord('invitation', { email: email });

      newInvitation.save()
      .then( () => {
        // NOTE: the first param in the this.set() method must be the same as the name given in the {{#if}}{{/if}} conditional in the templates/index.hbs
        this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
        this.set('emailAddress', '');
      });
    }
  }

  // NOTE: Playing around with the computed and observer methods
    // emailAddressChanged: Ember.observer('emailAddress', function() {
    //   console.log('observer is called', this.get('emailAddress'));
    // }),
    //
    // actualEmailAddress: Ember.computed('emailAddress', function() {
    //   console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
    // }),

  // NOTE: Alternative longhanded ways of determining if a form is filled in or not
    // isDisabled: Ember.computed.empty('emailAddress'),
    // isDisabled: Ember.computed('emailAddress', function() {
    //   return this.get('emailAddress') === '';
    // })
});
