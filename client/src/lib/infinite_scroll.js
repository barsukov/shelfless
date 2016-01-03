import React from 'react';
import ReactDOM from 'react-dom';

export var InfiniteScroll = ComposedComponent => class extends React.Component {
  constructor(props){
    super(props)
    this.hasMoreItems = this.hasMoreItems.bind(this)
    this.getElementDOMNode = this.getElementDOMNode.bind(this)
  }

  getElementDOMNode() {
    return ReactDOM.findDOMNode(this)
  }

  loadingAdditionalItems() {
    this.props.loadAdditional(this.props.page + 1)
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
  }

  scrollListener() {
    let node = this.getElementDOMNode()
    let isViewportAtBottom = node.scrollTop + node.offsetHeight >= node.scrollHeight - 20
    if(isViewportAtBottom){
      this.detachScrollListener()
      this.loadingAdditionalItems()
    }
    return
  }

  attachScrollListener() {
    if(!this.hasMoreItems()) {return}
    let node = this.getElementDOMNode()
    node.addEventListener("scroll", () => this.scrollListener())
    this.scrollListener()
  }

  fillViewPort() {
    if(!this._isFullViewPort()) {
      this.loadingAdditionalItems()
    }
  }

  _isFullViewPort() {
    return this.getElementDOMNode().scrollHeight > this.getElementDOMNode().offsetHeight
  }

  detachScrollListener() {
    let node = this.getElementDOMNode()
    node.removeEventListener("scroll", () => this.scrollListener())
  }

  render() {
    return <ComposedComponent {...this.props} {...this.state} />;
  }
}
