import React from 'react'
import PropTypes from 'prop-types'

import Styled from './Styled'
import { Button } from '../Forms'
import { ShowAt } from '../Responsive'

export const Pagination = ({
  isLoading,
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
  const currentPage = isLoading ? (
    <Styled.CurrentPage>. . . . .</Styled.CurrentPage>
  ) : (
    <Styled.CurrentPage>{`${from} - ${to} of ${count}`}</Styled.CurrentPage>
  )

  return (
    <Styled>
      <Styled.PerPage>
        <ShowAt breakpoint="smallAndAbove">
          <span>Items per page</span>
        </ShowAt>
        <Styled.Select
          onChange={onPerPageChange}
          value={perPage}
        >
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </Styled.Select>
      </Styled.PerPage>
      {currentPage}
      <Styled.MovePage>
        <Button
          onlyIcon
          onClick={onPrev}
          disabled={disablePrev}
        >
          <i className="material-icons">chevron_left</i>
        </Button>
        <Button
          onlyIcon
          onClick={onNext}
          disabled={disableNext}
        >
          <i className="material-icons">chevron_right</i>
        </Button>
      </Styled.MovePage>
    </Styled>
  )
}

Pagination.displayName = 'Pagination';

Pagination.defaultProps = {
  isLoading: false,
  perPage: 10,
  pageNo: 1,
  results: 10,
  count: 10
}

Pagination.propTypes = {
  isLoading: PropTypes.bool,
  onPerPageChange: PropTypes.func,
  perPage: PropTypes.number,
  pageNo: PropTypes.number,
  results: PropTypes.number,
  count: PropTypes.number,
  onPrev: PropTypes.func,
  onNext: PropTypes.func,
};
