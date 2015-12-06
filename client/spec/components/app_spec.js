'use strict';
var React = require('react')
import App from '../../src/components/app'
import { expect } from 'chai'

describe('App', function () {
  var component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    component = React.createElement(App);
  });

  it('should create a new instance of App', function () {
    expect(component).to.exist;
  });
});
