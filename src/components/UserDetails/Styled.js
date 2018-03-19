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
    background: linear-gradient(to right, rgba(122,122,122,0) 0%, rgb(175, 175, 175) 50%, rgba(122,122,122,0) 100%);
    animation: ${progress} 0.5s infinite linear;
  }
`

const Styled = styled.div`
  flex-grow: 1;
  position: relative;
`

const Name = styled.span`
  display: block;
  font-size: 2rem;
  line-height: 1;
  margin: 0 4rem 0.7rem 0;

  .material-icons {
    margin-left: 1rem;
    font-size: 1.6rem;
    position: relative;
    top: 2px;
    color: #FF9800;
  }
`
const NameLoading = Loading.extend`
  margin: 0 4rem 0.7rem 0;
  width: 80%;
  height: 2rem;
`

const Contact = styled.span`
  display: block;
  font-size: 1.3rem;
  line-height: 1;
  margin: 0 4rem 0.5rem 0;
  color: #6f6f7b;

  .material-icons {
    font-size: 1.2rem;
    position: relative;
    top: 2px;
    padding-right: 0.5rem;
    color: #d0ccc8;
  }
`
const ContactLoading = Loading.extend`
  margin: 0 4rem 0.5rem 0;
  width: 50%;
  height: 1.4rem;
`

const Bids = styled.span`
  position: absolute;
  top: 1rem;
  right: 0;
  background: #e8e4e1;
  height: 3rem;
  border-radius: 20%;
  text-align: center;
  line-height: 3.1rem;
  font-size: 1.3rem;
  padding: 0 1.1rem;
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
  box-shadow: 2px 2px #e8e4e1;
`
const BidLoading = Loading.extend`
  position: absolute;
  top: 1rem;
  right: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 20%;
`

const Premium = styled.span`
  margin-left: 0.5rem;

  em {
    background: #ff9719;
    color: #fff;
    line-height: 1;
    font-size: 1rem;
    text-transform: uppercase;
    padding: 0.2rem 0.5rem;
    border-radius: 2px;
    font-style: normal;
    position: relative;
    top: -3px;
  }
`

Styled.Name = Name
Styled.NameLoading = NameLoading
Styled.Contact = Contact
Styled.ContactLoading = ContactLoading
Styled.Bids = Bids
Styled.BidLoading = BidLoading
Styled.Premium = Premium

export default Styled
