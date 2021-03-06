window.SelectizeInputs = {
  initialize: function (){
    var selectizeInput = function(div, createOption) {
      if(createOption === undefined) {
        createOption = true
      }
      $(div).selectize({
        create: createOption
      });
    }

    var Router = Backbone.Router.extend({
     routes:{
       "accounts/:account/books/new" : "form_book",
       "accounts/:account/books/:book_param/edit" : "form_book",
       "accounts/:account/edit" : "form_account",
       "users/sign_up" : "form_new_user",
       "users" : "form_new_user"
     },

     form_book : function() {
       var url = window.location.origin + "/authors"
       selectizeInput('#book_author_name')
       selectizeInput('#book_category_name')
     },

     form_account : function() {
       debugger
       var url = window.location.origin + "/accounts"
       selectizeInput('#account_city', false)
     },

     form_new_user : function() {
       var url = window.location.origin + "/users/sign_up"
       selectizeInput('#user_account_attributes_city', false)
     }
    });
    new Router();
    Backbone.history.start({ pushState: true });
  }
}
$(document).ready(function() { SelectizeInputs.initialize() });
$(document).on('page:load', function (){
  Backbone.history.stop();
  SelectizeInputs.initialize();
});
