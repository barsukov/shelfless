require('selectize-css')
var selectize = require('selectize')
var selectizeInput = function(div, createOption = true) {
  $(div).selectize({
    create: createOption
  });
}
module.exports = selectizeInput;
