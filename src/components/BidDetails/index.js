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
        <Styled.AmountLoading />
        <Styled.TitleLoading />
        <Styled.CreatedLoading />
      </Styled>
    )
  }
  const renderData = () => {
    return (
      <Styled>
        <Styled.Amount>&euro; {amount}</Styled.Amount>
        <Styled.Title>
          <i className="material-icons">drive_eta</i>
          {carTitle}
        </Styled.Title>
        <Styled.Created>
          <i className="material-icons">schedule</i>
          {created}
        </Styled.Created>
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
  amount: PropTypes.string
};
