import styled from 'styled-components'

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

Styled.Back = Back
Styled.Title = Title
Styled.Action = Action

export default Styled