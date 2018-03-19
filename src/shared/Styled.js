import styled, { keyframes } from 'styled-components'

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

export const Loading = styled.div`
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