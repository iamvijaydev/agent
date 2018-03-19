import React from 'react'

import Styled from './Styled'

export class Avatar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    }

    this.onLoad = this.onLoad.bind(this)
  }

  componentDidMount() {
    if (this.img) {
      this.img.addEventListener('load', this.onLoad, false)
      this.img.src = this.props.src
    }
  }

  componentWillUpdate(nextProps) {
    this.img && this.img.removeEventListener('load', this.onLoad)

    if (nextProps.src !== this.props.src) {
      this.setState({ loaded: false })
    }
  }

  componentDidUpdate() {
    if (this.img) {
      this.img.addEventListener('load', this.onLoad, false)
      this.img.src = this.props.src
    }
  }

  componentWillUnmount() {
    this.img && this.img.removeEventListener('load', this.onLoad)
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
    return this.props.showLoading ? (
      <Styled>
        <Styled.Loading />
      </Styled>
    ) : (
      <Styled>
        <Styled.Default loaded={this.state.loaded}>{this.props.alt.slice(0,1).toUpperCase()}</Styled.Default>
        <Styled.Img alt={this.props.alt} innerRef={node => this.img = node} />
      </Styled>
    )
  }
}
