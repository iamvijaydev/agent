import React from 'react'
import styled from 'styled-components'

const Table = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  border: 1px solid #f2f2f2;
  font-size: 1rem;
  margin: 0.5rem;
  line-height: 1.5;
`

const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  
  &:nth-of-type(even) { background-color: #fff; }
  &:nth-of-type(odd) { background-color: #f2f2f2; }
`

const Header = Row.extend`
  font-weight: 700;
  background-color: $dark-color;
`

const Item = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex-grow: 1;
  flex-basis: 0;
  padding: 0.5em;
  border: 1px solid #fff;
  word-break: break-word;
`

Table.Header = Header;
Table.Row = Row;
Table.Item = Item;

Table._withFlexGrow = (n, Component) => Component.extend`
  flex-grow: ${n};
`

export default Table;