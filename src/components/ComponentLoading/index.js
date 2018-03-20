import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Placeholder } from '../Placeholder'

const Mask = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  * {
    max-width: 544px;
  }
`

export const ComponentLoading = ({
  error,
  timedOut,
  pastDelay
}) => {
  if (error) {
    return (
      <Mask>
        <Placeholder message="Failed to load page! Try refreshing." status="error" />
      </Mask>
    );
  } else if (timedOut) {
    return (
      <Mask>
        <Placeholder message="Still loading the page..." />
      </Mask>
    );
  } else if (pastDelay) {
    return (
      <Mask>
        <Placeholder message="Loading the page..." />
      </Mask>
    );
  } else {
    return null;
  }
}

ComponentLoading.displayName = 'ComponentLoading';

ComponentLoading.defaultProps = {
  title: 'ComponentLoading'
};

ComponentLoading.propTypes = {
  error: PropTypes.any,
  timedOut: PropTypes.bool,
  pastDelay: PropTypes.bool
};
