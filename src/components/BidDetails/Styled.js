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
const Loading = styled.div`
  position: relative;
  overflow: hidden;
  background: #d0ccc8;

  &:after {
    content: '';
    position: absolute;
    height: 100%;
    width: 70%;
    background: linear-gradient(to right, rgba(122,122,122,0) 0%, rgba(175, 175, 175, 0.5) 50%, rgba(122,122,122,0) 100%);
    animation: ${progress} 0.5s infinite linear;
  }
`

const Styled = styled.div`
  flex: 1;
  position: relative;
`

const Amount = styled.span`
  display: block;
  font-size: 1.7rem;
  line-height: 1;
  margin: 0 8rem 0.7rem 0;
`
const AmountLoading = Loading.extend`
  margin: 0 8rem 0.7rem 0;
  width: 50%;
  height: 1.7rem;
`

const Title = styled.span`
  display: block;
  font-size: 1.5rem;
  line-height: 1;
  margin: 0 8rem 0.5rem 0;
  color: #6f6f7b;

  .material-icons {
    font-size: 1.5rem;
    position: relative;
    top: 2px;
    padding-right: 0.5rem;
    color: #d0ccc8;
  }
`
const TitleLoading = Loading.extend`
  margin: 0 8rem 0.5rem 0;
  width: 35%;
  height: 1.5rem;
`

const Created = styled.span`
  position: absolute;
  top: 1rem;
  right: 0;
  font-size: 1.2rem;

  .material-icons {
    font-size: 1.2rem;
    position: relative;
    top: 2px;
    padding-right: 0.5rem;
    color: #d0ccc8;
  }
`
const CreatedLoading = Loading.extend`
  position: absolute;
  top: 1rem;
  right: 0;
  width: 7rem;
  height: 1.2rem;
`

Styled.Amount = Amount
Styled.AmountLoading = AmountLoading
Styled.Title = Title
Styled.TitleLoading = TitleLoading
Styled.Created = Created
Styled.CreatedLoading = CreatedLoading

export default Styled
