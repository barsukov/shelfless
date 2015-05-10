var Backbone = require('backbone')
var InputFinder = require('./input_finder')
var Router = Backbone.Router.extend({
  routes : {
    "form_book" : "form_book",
  },
  form_book : function() {
    var url = window.location.origin + "/authors"
    React.render(<InputFinder source={url} key="authors"/>, document.getElementById("author_type_head"));
    //React.render(<InputFinder key="category"/>, document.getElementById("category_type_head"));
  },
});

module.exports = Router
