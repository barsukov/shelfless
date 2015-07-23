var Backbone = require('backbone')
var selectizeInput = require('./selectize_input')
var Router = Backbone.Router.extend({
  routes : {
    "form_book" : "form_book",
    "form_account" : "form_account",
    "form_new_user" : "form_new_user"
  },
  form_book : function() {
    var url = window.location.origin + "/authors"
    selectizeInput('#book_author_name')
    selectizeInput('#book_category_name')
  },
  form_account : function() {
    var url = window.location.origin + "/accounts"
    selectizeInput('#account_city', false)
  },
  form_new_user : function() {
    var url = window.location.origin + "/users/sign_up"
    selectizeInput('#user_city', false)
  },
});

module.exports = Router
