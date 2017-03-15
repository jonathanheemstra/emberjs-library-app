import Ember from 'ember';

export default Ember.Controller.extend({
  validEmailAddress: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

  validMessageBody: Ember.computed.gte('message.length', 5),

  isValid: Ember.computed.and('validEmailAddress', 'validMessageBody'),

  isDisabled: Ember.computed.not('isValid'),

  actions: {
    sendMessage() {
      alert(`Saving of the following message is in progress: ${this.get('message')}`);

      this.set('responseMessage', `Thank you! We\'ve received your message and we will respond to your provided email address: ${this.get('emailAddress')}`);
      this.set('message', '');
      this.set('emailAddress', '');
    }
  }
});
