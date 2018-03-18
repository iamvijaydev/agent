import styled from 'styled-components'

const List = styled.div`
  padding: 1rem 2rem;
  background: #fff;

  @media(min-width: 768px) {
    width: 544px;
    margin: 5rem auto;
    padding: 0.5rem 2rem;
    box-shadow: 0 2px 2px rgba(0,0,0,.24), 0 0 2px rgba(0,0,0,.12);
    border-radius: 3px;
  }
`

const Item = styled.div`
  padding: 1.5rem 0 1rem;
  display: flex;
  cursor: ${props => props.noCursor ? 'default' : 'pointer'};

  &:not(:last-child) {
    border-bottom: 1px solid #eaeaea;
  }
`

List.Item = Item

export default List