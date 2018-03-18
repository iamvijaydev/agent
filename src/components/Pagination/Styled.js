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
  button {
    border: 1px solid #ff9702;
    background: #fff;
    color: #ff9702;
    border-radius: 3px;
    height: 3rem;
    line-height: 1;
    padding: 0 0.5rem;
    margin: 0 1rem 0 0;
    display: inline-block;
    cursor: pointer;
    outline: none;
    text-align: center;
    transition: background 0.15s, color 0.15s;
    will-change background, color;

    &:hover {
      background: #ff9702;
      color: #fff;
    }

    &:disabled {
      cursor: default;
      border: 1px solid #ccc;
      background: #fff;
      color: #aaa;
    }
  }
`

Styled.PerPage = PerPage
Styled.CurrentPage = CurrentPage
Styled.MovePage = MovePage

export default Styled