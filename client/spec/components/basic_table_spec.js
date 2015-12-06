'use strict';
import ReactTestUtils from 'react-addons-test-utils'
import BasicTable from '../../src/components/tables/basic_table'
import { expect } from 'chai'
import sinon from 'sinon/pkg/sinon';

describe('BasicTable', function () {
  var component;
  var book = [{title: "Halilua"}];
  var handleBookClick;

  beforeEach(function () {
    var books = [book]
    var container = document.createElement('div');
    container.id = 'content';
    handleBookClick = sinon.spy()
    document.body.appendChild(container);

    component = ReactTestUtils.renderIntoDocument(<BasicTable handleBookClick={handleBookClick}
      books={books} />);
  });

  it('should create a new instance of BasicTable', function () {
    expect(component).to.exist;
  });

  describe("BasicTable handlers", ()  => {
    it('selects book for request', () => {
      let cellClass = "my-class"

      let targetElements = ReactTestUtils.scryRenderedDOMComponentsWithClass(component,
        cellClass)
      ReactTestUtils.Simulate.click(targetElements[0])
      sinon.assert.calledOnce(component.props.handleBookClick);
      sinon.assert.calledWith(component.props.handleBookClick, book);
    });
  })
});
