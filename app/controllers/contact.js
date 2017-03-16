import Ember from 'ember';

export default Ember.Controller.extend({
  validEmailAddress: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

  validMessageBody: Ember.computed.gte('message.length', 5),

  isValid: Ember.computed.and('validEmailAddress', 'validMessageBody'),

  isDisabled: Ember.computed.not('isValid'),

  actions: {
    sendMessage() {
      const email = this.get('emailAddress');
      const message = this.get('message');
      const newMessage = this.store.createRecord('contact', { email: email, message: message });

      newMessage.save()
      .then( () => {
        this.set('responseMessage', `Thank you! We\'ve received your message and we will respond to your provided email address: ${this.get('emailAddress')}`);
        this.set('message', '');
        this.set('emailAddress', '');
      });
    }
  }
});
