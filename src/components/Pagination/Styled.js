import styled from 'styled-components'

const Styled = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  font-size: 1.3rem;
`

const Select = styled.select`
  padding: 0.5rem 1rem;
  border: 1px solid #d0ccc8;
  border-radius: 3px;
  font-size: 1.3rem;
  font-family: 'Open Sans', sans-serif;
  cursor: pointer;

  &:focus {
    outline: 1px dashed;
    outline-offset: -4px;
    outline-color: #c8d0ff;
  }
`

const PerPage = styled.div`
  select {
    margin-left: 1rem;
  }
`

const CurrentPage = styled.span`
  margin: 0 2rem;
`

const MovePage = styled.div`
`

Styled.PerPage = PerPage
Styled.Select = Select
Styled.CurrentPage = CurrentPage
Styled.MovePage = MovePage

export default Styled
