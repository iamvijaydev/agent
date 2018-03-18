import { mockFetch } from '../../../mockFetch'
import {
    FETCHING,
    FETCHED,
    FAILED
} from './constants'

const fetching = () => ({ type: FETCHING })

const fetched = result => ({
    type: FETCHED,
    result
})

const failed = error => ({
    type: FAILED,
    error
})

export const fetchMerchantList = ({ page_no, per_page }) => dispatch => {
    dispatch(fetching())

    mockFetch.fetch(`/merchant?page_no=${page_no}&per_page=${per_page}`)
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
        .then(result => dispatch(fetched(result)))
        .catch(error => dispatch(failed({
            has: true,
            ...error
        })))
}