import styled from 'styled-components'

export const Button = styled.button`
  border: 1px solid #ff9702;
  background: #fff;
  color: #ff9702;
  border-radius: 3px;
  line-height: 1;
  padding: ${props => props.onlyIcon ? '0.5rem 1rem' : '1rem 2rem'};
  margin: 0 0 0 1rem;
  cursor: pointer;
  outline: none;
  text-align: center;
  font-size: 1.3rem;
  font-family: 'Open Sans', sans-serif;
  transition: background 0.15s, color 0.15s;
  will-change background, color;

  &:focus {
    outline: 1px dashed;
    outline-offset: -4px;
  }

  &:hover {
    background: #ff9702;
    color: #fff;
  }

  &:disabled {
    cursor: default;
    border: 1px solid #e8e4e1;
    background: #eaeaea;
    color: #d0ccc8;
  }
`
