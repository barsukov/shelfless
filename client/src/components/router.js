var Backbone = require('backbone')
var selectizeInput = require('./selectize_input')
var newInterFaceMain = require('./single_page_main')

var Router = Backbone.Router.extend({
  routes : {
    "accounts/:account/books/new" : "form_book",
    "accounts/:account/books/:book_param/edit" : "form_book",
    "accounts/:account/edit" : "form_account",
    "users/sign_up" : "form_new_user",
    "single_page_application" : "single_page_application",
    "users" : "form_new_user"
  },
  single_page_application: function(){
    newInterFaceMain()
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
    selectizeInput('#user_account_attributes_city', false)
  }
});

module.exports = Router
