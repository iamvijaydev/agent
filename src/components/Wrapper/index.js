import React from 'react'
import styled from 'styled-components'

const Styled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const Content = styled.div`
  position: absolute;
  top: 5rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  overflow-x: hidden;
`

export class Wrapper extends React.Component {
  componentDidMount() {
    const header = this.node.children[0]
    const content = this.node.children[1]

    console.log(header, content)
  }

  render() {
    return <Styled innerRef={node => this.node = node}>{this.props.children}</Styled>
  }
}

Wrapper.Content = Content