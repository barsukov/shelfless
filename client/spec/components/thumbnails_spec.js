'use strict';
import Ract from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import Thumbnails from '../../src/components/thumbnails'
import { expect } from 'chai'
import sinon from 'sinon/pkg/sinon';

describe('Thumbnails', function () {
  var component;
  var loadAdditional;

  beforeEach(function () {
    loadAdditional = sinon.spy()
    component = ReactTestUtils.renderIntoDocument(<Thumbnails loadAdditional={loadAdditional} books={[]} />);
  });

  it('should create a new instance of Thumbnails', function () {
    expect(component).to.exist;
  });
});
