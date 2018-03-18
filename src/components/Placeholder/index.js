import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const status = {
  success: '#58e649',
  error: '#e64949',
  default: '#6f6f7b'
}

const Message = styled.div`
  margin: 2rem;
  padding: 2rem;
  width: 100%;
  font-size: 2rem;
  text-align: center;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  color: ${props => status[props.status]}
`

export const Placeholder = ({
  status,
  message
}) => <Message status={status}>{message}</Message>

Placeholder.displayName = 'Placeholder'

Placeholder.defaultProps = {
  status: 'default'
}

Placeholder.propTypes = {
  status: PropTypes.string,
  message: PropTypes.string.isRequired
}