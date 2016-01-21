import Thumbnails from '../../src/components/thumbnails'
import { InfiniteScroll } from "../../src/lib/infinite_scroll"
import { expect } from 'chai'
import sinon from 'sinon/pkg/sinon';
import requestBook from '../../src/reducers/combined_reducers'
import { wrapInProvider } from '../helpers/test_helper'
import { createStore } from 'redux'
import ReactTestUtils from 'react-addons-test-utils'

describe('Thumbnails', function () {
  var component;
  var loadAdditional;

  beforeEach(function () {
    loadAdditional = sinon.spy()
    let store = createStore(requestBook)
    component = wrapInProvider(<Thumbnails loadAdditional={loadAdditional} books={[]} />, store);
  });

  it('should create a new instance of Thumbnails', function () {
    expect(component).to.exist;
  });

  describe('infinite scroll behaviour', () => {
    describe('#loadingAdditionalItems', () => {
      it('calls new page when scroll in the bootom', () => {
        let connect = ReactTestUtils.findRenderedComponentWithType(component, Thumbnails);
        let wrappedInstance = connect.refs.wrappedInstance
        wrappedInstance.attachScrollListener()
        sinon.assert.called(loadAdditional);
      });
    });
  });
});
