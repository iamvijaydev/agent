import React from 'react'
import PropTypes from 'prop-types'

import Styled from './Styled'

export const UserDetails = ({
    name,
    hasPremium,
    email,
    phone,
    bids
}) => {
    return (
        <Styled>
            <Styled.Name>
                {name}
                {
                    hasPremium &&
                    <i className="material-icons" title="Premium">weekend</i>
                }
            </Styled.Name>
            <Styled.Contact>{email}</Styled.Contact>
            <Styled.Contact>{phone}</Styled.Contact>
            <Styled.Bids title={`${bids} bids`}>{bids}</Styled.Bids>
        </Styled>
    )
}

UserDetails.displayName = 'UserDetails';

UserDetails.propTypes = {
  name: PropTypes.string,
  hasPremium: PropTypes.bool,
  email: PropTypes.string,
  phone: PropTypes.string,
  bids: PropTypes.number
};