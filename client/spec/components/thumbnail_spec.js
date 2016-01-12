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

  describe('#getElementItem', () => {
    it('returns string with special class', () => {
      expect(component.getElementItem("Title")).to.exist;
    });

    it('returns nothing when value is undefined', () => {
      expect(component.getElementItem(undefined)).not.to.exist;
    });
  });

  it('should create a new instance of Thumbnails', function () {
    let element = ReactTestUtils.findRenderedDOMComponentWithClass(component,
      "thumbnail-heading")
    expect(element).to.exist;
  });
});
