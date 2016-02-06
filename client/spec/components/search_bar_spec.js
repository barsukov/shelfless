'use strict';
var React = require('react')
import SearchBar from '../../src/components/search_bar'
import { expect } from 'chai'

describe('SearchBar', function () {
  var component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    component = React.createElement(SearchBar);
  });

  it('should create a new instance of SearchBar', function () {
    expect(component).to.exist;
  });
});
