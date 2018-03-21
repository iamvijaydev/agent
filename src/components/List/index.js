import styled from 'styled-components'

const List = styled.div`
  padding: 1rem 2rem;
  background: #fff;

  &:not(:last-child) {
    border-bottom: 1px solid #d0ccc8;
  }

  &:only-child {
    border-bottom: none;
  }

  @media(min-width: 768px) {
    width: 544px;
    margin: 3rem auto;
    padding: 0.5rem 2rem;
    box-shadow: 0 2px 2px rgba(0,0,0,.24), 0 0 2px rgba(0,0,0,.12);
    border-radius: 3px;

    &:not(:last-child) {
      border-bottom: none;
    }

    &:first-child {
      margin-top: 5rem;
    }

    &:last-child {
      margin-bottom: 5rem;
    }

    &:only-child {
      margin-top: 5rem;
      margin-bottom: 5rem;
    }
  }

  @media(min-width: 992px) {
    width: 768px;
  }
`

const Item = styled.div`
  padding: 1.5rem 0 1rem;
  display: flex;
  cursor: ${props => props.noCursor ? 'default' : 'pointer'};
  justify-content: ${props => props.justify ? props.justify : 'flex-start'}

  &:not(:last-child) {
    border-bottom: 1px solid #eaeaea;
  }
`

List.Item = Item

export { List }
