import styled from 'styled-components'

const Styled = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  font-size: 1.3rem;
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
Styled.CurrentPage = CurrentPage
Styled.MovePage = MovePage

export default Styled