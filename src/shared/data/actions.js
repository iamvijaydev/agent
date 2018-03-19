import { mockFetch } from '../../mockFetch'
import {
  FETCHING,
  FETCHED,
  FAILED,
  CLEAR
} from './constants'

const fetching = () => ({ type: FETCHING })

const fetched = data => ({
  type: FETCHED,
  data
})

const failed = error => ({
  type: FAILED,
  error
})

export const fetchMerchantItem = id => dispatch => {
  dispatch(fetching())

  mockFetch.fetch(`/merchant/${id}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        return Promise.reject({
            status: response.status,
            statusText: response.statusText
        })
      }
    })
    .then(result => dispatch(fetched(result.data)))
    .catch(error => dispatch(failed({
      has: true,
      ...error
    })))
}

export const clearMerchantData = () => ({
  type: CLEAR
})