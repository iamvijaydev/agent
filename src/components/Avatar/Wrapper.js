import styled from 'styled-components'

const Box = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  padding: 1px;  
`

const Wrapper = Box.extend`
  font-size: 0;
  vertical-align: top;
  position: relative;
  overflow: hidden;
  flex-basis: 5rem;
  margin-right: 2rem;
`

const Default = Box.extend`
  position: absolute;
  left: 0;
  top: 0;
  text-align: center;
  line-height: 5rem;
  font-size: 2rem;
  background: #d0ccc8;
  opacity: ${props => props.loaded ? 0 : 1};
  transition: opacity 0.3s;
  will-change: opacity;
`

const Img = Box.withComponent('img').extend`
  height: auto;
  padding: 0;
  vertical-align: top;
`

Wrapper.Default = Default
Wrapper.Img = Img

export default Wrapper