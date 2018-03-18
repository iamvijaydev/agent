import React from 'react'
import PropTypes from 'prop-types'

import Styled from './Styled'

export const Header = ({
  hasBackBtn,
  backCallback,
  title,
  hasAction,
  actionTitle,
  actionIcon,
  actionCallback
}) => {
  return (
    <Styled>
      {
        !!hasBackBtn &&
        <Styled.Back
          onClick={backCallback}
          title="Back"
        >
          <i className="material-icons">keyboard_backspace</i>
        </Styled.Back>
      }
      <Styled.Title>{title}</Styled.Title>
      {
        !!hasAction &&
        <Styled.Action
          onClick={actionCallback}
          title={actionTitle}
        >
          <i className="material-icons">{actionIcon}</i>
        </Styled.Action>
      }
    </Styled>
  )
}

Header.displayName = 'Header';

Header.defaultProps = {
  title: 'Header'
};

Header.propTypes = {
  hasBackBtn: PropTypes.bool,
  backCallback: PropTypes.func,
  title: PropTypes.string.isRequired,
  hasAction: PropTypes.bool,
  actionTitle: PropTypes.string,
  actionIcon: PropTypes.string,
  actionCallback: PropTypes.func
};