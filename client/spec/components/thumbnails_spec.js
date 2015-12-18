'use strict';
import Ract from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import Thumbnails from '../../src/components/thumbnails'
import { expect } from 'chai'

describe('Thumbnails', function () {
  var component;

  beforeEach(function () {
    component = ReactTestUtils.renderIntoDocument(<Thumbnails books={[]} />);
  });

  it('should create a new instance of Thumbnails', function () {
    expect(component).to.exist;
  });
});
