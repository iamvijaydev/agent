import styled, { keyframes } from 'styled-components'

const Box = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  padding: 1px;  
`

const Styled = Box.extend`
  font-size: 0;
  vertical-align: top;
  position: relative;
  overflow: hidden;
  flex-basis: 5rem;
  margin-right: 2rem;
`

const progress = keyframes`
  0% {
    left: 0;
    transform: translateX(-100%);
  }
  100% {
    left: 100%;
    transform: translateX(0%);
  }
`;
const Loading = Box.extend`
  position: relative;
  overflow: hidden;
  background: #d0ccc8;

  &:after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(to right, rgba(122,122,122,0) 0%, rgba(175, 175, 175, 0.5) 50%, rgba(122,122,122,0) 100%);
    animation: ${progress} 0.5s infinite linear;
  }
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

const Img = styled.img`
  max-height: 100%;
  min-width: 100%;
`

Styled.Loading = Loading
Styled.Default = Default
Styled.Img = Img

export default Styled
