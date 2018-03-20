import styled, { keyframes } from 'styled-components'

const Styled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5rem;
  background-color: #3F51B5;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: #fff;
  padding: 0 2rem;
  z-index: 10;

  .material-icons {
    font-size: 2.5rem;
    line-height: 2;
  }
`

const Back = styled.div`
  flex-basis: 5rem;
  cursor: pointer;
`

const Title = styled.h1`
  flex-grow: 1;
  margin: 0;
  line-height: 1;
  font-size: 2rem;
  font-weight: normal;
`

const Action = styled.div`
  flex-basis: 2rem;
  cursor: pointer;
`
const fadeIn = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
`;
const Loader = styled.div`
  overflow: hidden;
  height: 4px;
  background-color: #ffc571;
  border-bottom: 1px solid #8598ff;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -4px;
  animation: ${fadeIn} 0.3s ease;
`

const indeterminateBefore = keyframes`
  0% {
    left: -100%;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 10%;
  }
`;
const indeterminateAfter = keyframes`
  00% {
    left: -150%;
    width: 100%;
  }
  100% {
      left: 100%;
      width: 10%;
  }
`;
const IndeterminateLoader = styled.div`
  position: relative;
    width: 100%;
    height: 100%;

    &:before {
      content: '';
      position: absolute;
      height: 100%;
      background-color: #FF9800;
      animation: ${indeterminateBefore} 1s infinite ease-out;
    }

    &:after {
      content: '';
      position: absolute;
      height: 100%;
      background-color: #ff8a00;
      animation: ${indeterminateAfter} 1s infinite ease-in;
    }
`

Styled.Back = Back
Styled.Title = Title
Styled.Action = Action
Styled.Loader = Loader
Styled.IndeterminateLoader = IndeterminateLoader

export default Styled