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
`

const Bids = styled.span`
    position: absolute;
    top: 1rem;
    right: 0;
    border: 1px solid #d2d2d2;
    height: 3rem;
    border-radius: 20%;
    text-align: center;
    line-height: 3.1rem;
    font-size: 1.3rem;
    padding: 0 1.1rem;
`

Styled.Name = Name
Styled.Contact = Contact
Styled.Bids = Bids

export default Styled