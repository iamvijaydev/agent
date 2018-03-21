import { mockFetch } from '../../../services/mockFetch'
import {
  SAVING,
  SAVED,
  FAILED,
  RESET
} from './constants'

const saving = () => ({ type: SAVING })

const saved = (result) => ({
  type: SAVED,
  result
})

const failed = error => ({
  type: FAILED,
  error
})

export const saveMerchant = ({ id, ...data }) => dispatch => {
  dispatch(saving())

  const method = !!id ? 'put' : 'post'
  const url = !!id ? `/merchant/${id}` : `/merchant/`

  mockFetch.fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
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
    .then(result => dispatch(saved(result)))
    .catch(error => dispatch(failed({
      has: true,
      ...error
    })))
}

export const reset = () => ({ type: RESET })
