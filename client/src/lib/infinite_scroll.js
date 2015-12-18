import React from 'react';
import ReactDOM from 'react-dom';

export var InfiniteScroll = ComposedComponent => class extends React.Component {

  constructor(){
    super()
    this.hasMoreItems = this.hasMoreItems.bind(this)
    this.getElementDOMNode = this.getElementDOMNode.bind(this)
  }

  getElementDOMNode() {
    return ReactDOM.findDOMNode(this)
  }

  loadingAdditionalItems() {
    //loadNext
  }

  hasMoreItems() {
    return true
  }

  componentDidMount() {
    this.attachScrollListener()
  }

  componentWillUnmount() {
    this.detachScrollListener()
  }

  componentDidUpdate() {
    this.attachScrollListener()
    if(this.isViewportNotFullFilled())
      this.fillViewPort()
  }

  scrollListener() {
    let node = this.getElementDOMNode()
    let isViewportAtBottom = node.scrollTop + node.offsetHeight >= node.scrollHeight - 20
    debugger
    if(isViewportAtBottom)
      console.log('wokr')
      this.detachScrollListener()
      this.loadingAdditionalItems()
    return
  }

  attachScrollListener() {
    console.log('attached')
    debugger
    if(!this.hasMoreItems()) {return}
    let node = this.getElementDOMNode()
    debugger
    node.addEventListener("scroll", this.scrollListener)
    this.scrollListener()
  }

  fillViewPort() {
    unless(this._isFullViewPort())
      this.loadingAdditionalItems()
  }

  _isFullViewPort() {
    return this.getElementDOMNode().scrollHeight > this.getElementDOMNode().offsetHeight
  }

  detachScrollListener() {
    let node = this.getElementDOMNode()
    node.removeEventListener("scroll", this.scrollListener)
  }

  render() {
    return <ComposedComponent {...this.props} {...this.state} />;
  }
}
