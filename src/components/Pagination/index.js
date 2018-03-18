import React from 'react'
import PropTypes from 'prop-types'

import Styled from './Styled'

export const Pagination = ({
  onPerPageChange,
  perPage,
  pageNo,
  results,
  count,
  onPrev,
  onNext
}) => {
  const from = (pageNo - 1) * perPage + 1
  const to = from + results - 1
  const disablePrev = pageNo === 1
  const disableNext = (perPage * pageNo) + 1 > count

  return (
    <Styled>
      <Styled.PerPage>
        <span>Items per page</span>
        <select
          onChange={onPerPageChange}
          value={perPage}
        >
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </Styled.PerPage>
      <Styled.CurrentPage>{`${from} - ${to} of ${count}`}</Styled.CurrentPage>
      <Styled.MovePage>
        <button
          onClick={onPrev}
          disabled={disablePrev}
        >
          <i className="material-icons">chevron_left</i>
        </button>
        <button
          onClick={onNext}
          disabled={disableNext}
        >
          <i className="material-icons">chevron_right</i>
        </button>
      </Styled.MovePage>
    </Styled>
  )
}

Pagination.displayName = 'Pagination';

Pagination.propTypes = {
  onPerPageChange: PropTypes.func,
  perPage: PropTypes.number,
  pageNo: PropTypes.number,
  results: PropTypes.number,
  count: PropTypes.number,
  onPrev: PropTypes.func,
  onNext: PropTypes.func,
};