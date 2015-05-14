var Backbone = require('backbone')
var selectizeInput = require('./selectize_input')
var Router = Backbone.Router.extend({
  routes : {
    "form_book" : "form_book",
  },
  form_book : function() {
    var url = window.location.origin + "/authors"
    selectizeInput('#book_author_name')
    selectizeInput('#book_category_name')
  },
});

module.exports = Router