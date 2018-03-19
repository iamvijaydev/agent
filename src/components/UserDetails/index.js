import React from 'react'
import PropTypes from 'prop-types'

import Styled from './Styled'
import {
  ShowAt,
  HideAt
} from '../../components/Responsive'

export const UserDetails = ({
  showLoading,
  name,
  hasPremium,
  email,
  phone,
  bids
}) => {
  const renderLoading = () => {
    return (
      <Styled>
        <Styled.NameLoading />
        <Styled.ContactLoading />
        <Styled.ContactLoading />
        <Styled.BidLoading />
      </Styled>
    )
  }
  const renderData = () => {
    return (
      <Styled>
        <Styled.Name>
          {name}
          {
            hasPremium &&
            <Styled.Premium>
              <ShowAt breakpoint="mediumAndAbove">
                <em>Premium</em>
              </ShowAt>
              <HideAt breakpoint="withinSmall">
                <i className="material-icons" title="Premium">weekend</i>
              </HideAt>
            </Styled.Premium>
          }
        </Styled.Name>
        <Styled.Contact><i className="material-icons">mail</i>{email}</Styled.Contact>
        <Styled.Contact><i className="material-icons">call</i>{phone}</Styled.Contact>
        <Styled.Bids title={`${bids} bids`}>{bids}</Styled.Bids>
      </Styled>
    )
  }

  return showLoading ? renderLoading() : renderData()
}

UserDetails.displayName = 'UserDetails';

UserDetails.propTypes = {
  showLoading: PropTypes.bool,
  name: PropTypes.string,
  hasPremium: PropTypes.bool,
  email: PropTypes.string,
  phone: PropTypes.string,
  bids: PropTypes.number
};
