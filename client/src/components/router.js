var Backbone = require('backbone')
var selectizeInput = require('./selectize_input')
var newInterFaceMain = require('./new_interface_main')

var Router = Backbone.Router.extend({
  routes : {
    "accounts/:account/books/new" : "form_book",
    "accounts/:account/books/:book_param/edit" : "form_book",
    "accounts/:account/edit" : "form_account",
    "users/sign_up" : "form_new_user",
    "new_interface" : "new_interface"
  },
  new_interface: function(){
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
    selectizeInput('#user_city', false)
  }
});

module.exports = Router
