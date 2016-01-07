'use strict';
import Ract from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import Thumbnail from '../../src/components/thumbnail'
import { expect } from 'chai'

describe('Thumbnail', function () {
  var component;

  beforeEach(function () {
    component = ReactTestUtils.renderIntoDocument(<Thumbnail book={{}} />);
  });

  it('should create a new instance of Thumbnails', function () {
    expect(component).to.exist;
  });
});
