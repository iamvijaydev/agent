import React from 'react'
import PropTypes from 'prop-types'

import Styled from './Styled'

export const BidDetails = ({
  showLoading,
  carTitle,
  created,
  amount,
}) => {
  const renderLoading = () => {
    return (
      <Styled>
        <Styled.TitleLoading />
        <Styled.CreatedLoading />
        <Styled.AmountLoading />
      </Styled>
    )
  }
  const renderData = () => {
    return (
      <Styled>
        <Styled.Title>{carTitle}</Styled.Title>
        <Styled.Created>{created}</Styled.Created>
        <Styled.Amount title={amount}>{amount}</Styled.Amount>
      </Styled>
    )
  }

  return showLoading ? renderLoading() : renderData()
}

BidDetails.displayName = 'BidDetails';

BidDetails.defaultProps = {
  showLoading: false
}

BidDetails.propTypes = {
  showLoading: PropTypes.bool,
  carTitle: PropTypes.string,
  created: PropTypes.string,
  amount: PropTypes.number
};
