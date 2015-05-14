require('selectize-css')
var selectize = require('selectize')
var selectizeInput = function(div) {
  $(div).selectize({
    create: true
  });
}
module.exports = selectizeInput;
