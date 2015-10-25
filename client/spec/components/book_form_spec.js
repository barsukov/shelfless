'use strict';
var React = require('react')
import BookForm from '../../src/components/book_form/book_form'
import { expect } from 'chai'

describe('BookForm', function () {
  var component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    component = React.createElement(BookForm);
  });

  it('should create a new instance of BookForm', function () {
    expect(component).to.exist;
  });
});
