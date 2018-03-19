import React from 'react'

import Wrapper from './Wrapper'

export class Avatar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    }

    this.onLoad = this.onLoad.bind(this)
  }

  componentDidMount() {
    this.img.addEventListener('load', this.onLoad, false)
    this.img.src = this.props.src
  }

  componentWillUpdate(nextProps) {
    this.img && this.img.removeEventListener('load', this.onLoad)

    if (nextProps.src !== this.props.src) {
      this.setState({ loaded: false })
    }
  }

  componentDidUpdate() {
    this.img.addEventListener('load', this.onLoad, false)
    this.img.src = this.props.src
  }

  componentWillUnmount() {
    this.img.removeEventListener('load', this.onLoad)
  }

  onLoad() {
    this.setState({ loaded: true })
  }

  alreadyLoaded() {
    if (!this.img.complete) {
      return false;
    }

    if (this.img.naturalWidth === 0) {
      return false;
    }

    return true;
  }

  render() {
    return (
      <Wrapper>
        <Wrapper.Default loaded={this.state.loaded}>{this.props.alt.slice(0,1).toUpperCase()}</Wrapper.Default>
        <Wrapper.Img alt={this.props.alt} innerRef={node => this.img = node} />
      </Wrapper>
    )
  }
}