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

const Wrapper = props => <Styled>{props.children}</Styled>

Wrapper.didplayName = 'Wrapper'
Wrapper.Content = Content

export { Wrapper }
