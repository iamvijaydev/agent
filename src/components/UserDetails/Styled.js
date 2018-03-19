import styled from 'styled-components'

const Styled = styled.div`
    flex-grow: 1;
    position: relative;
`

const Name = styled.span`
    display: block;
    font-size: 2rem;
    line-height: 1;
    padding: 0 4rem 0.7rem 0;

    .material-icons {
        margin-left: 1rem;
        font-size: 1.6rem;
        position: relative;
        top: 2px;
        color: #FF9800;
    }
`

const Contact = styled.span`
    display: block;
    font-size: 1.3rem;
    line-height: 1;
    padding: 0 4rem 0.5rem 0;
    color: #6f6f7b;

    .material-icons {
      font-size: 1.2rem;
      position: relative;
      top: 2px;
      padding-right: 0.5rem;
      color: #d0ccc8;
    }
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
Styled.Contact = Contact
Styled.Bids = Bids
Styled.Premium = Premium

export default Styled
