import React from 'react'

export const ComponentLoading = ({
  error,
  timedOut,
  pastDelay
}) => {
  if (error) {
    return <div>Error!</div>;
  } else if (timedOut) {
    return <div>Taking a long time...</div>;
  } else if (pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}