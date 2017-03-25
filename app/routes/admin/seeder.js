import Ember from 'ember';

export default Ember.Route.extend({
  init() {
    debugger;
  },

  beforeModel(transition) {
    debugger;
  },

  model(params, transition) {
    debugger;
    return Ember.RSVP.hash({
      libraries: this.store.findAll('library'),
      books: this.store.findAll('book'),
      authors: this.store.findAll('author')
    });
  },

  afterModel(model, transition) {
    debugger;
  },

  activate() {
    debugger;
  },

  setupController(controller, model) {
    debugger;
    controller.set('libraries', model.libraries);
    controller.set('books', model.books);
    controller.set('authors', model.authors);
    debugger;
  },

  renderTemplate(controller, model) {
    debugger;
  }
});
