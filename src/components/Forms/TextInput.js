import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'


const Styled = styled.div`
  position: relative;
  overflow: hidden;
  background: #fff;
  width: 100%;

  small {
    display: block;
    font-size: 1rem;
    color: #e64949;
  }
`

const progress = keyframes`
  0% {
    left: 0;
    transform: translateX(-100%);
  }
  100% {
    left: 100%;
    transform: translateX(0%);
  }
`;
const StyledLoadng = Styled.extend`
  background: #d0ccc8;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(to right, rgba(122,122,122,0) 0%, rgba(175, 175, 175, 0.5) 50%, rgba(122,122,122,0) 100%);
    animation: ${progress} 0.5s infinite linear;
  }
`

const Input = styled.input`
  border: 1px solid #d0ccc8;
  background: #fff;
  outline: none;
  font-size: 1.3rem;
  font-family: 'Open Sans', sans-serif;
  padding: 0.7rem 1rem;
  border-radius: 3px;
  width: 100%;
  box-sizing: border-box;
  transition: border 0.15s;
  will-change border;
  
  &:focus {
    border: 1px solid #3f51b5;
    outline: 1px dashed;
    outline-offset: -0.4rem;
    outline-color: #c8d0ff;
  }
`

export const TextInput = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  isLoading,
  message
}) => {
  return isLoading ? (
    <StyledLoadng>
      <Input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={true}
      />
    </StyledLoadng>
  ): (
    <Styled>
      <Input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <small>{message}</small>
    </Styled>
  )
}

TextInput.displayName = 'TextInput';

TextInput.defaultProps = {
  type: 'text'
};

TextInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  isLoading: PropTypes.bool,
  message: PropTypes.string
};