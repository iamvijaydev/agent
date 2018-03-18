import { fetch } from '../../../mockFetch'
import {
    FETCHING,
    FETCHED,
    FAILED
} from './actions'

const fetching = () => ({ type: FETCHING })

const fetched = data => ({
    type: FETCHED,
    data
})

const failed = error => ({
    type: FAILED,
    error
})

export const fetchMerchantList = ({ page_no, per_page }) => dispatch => {
    dispatch(fetching())

    fetch(`/merchant?page_no=${page_no}&per_page=${per_page}`)
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
        .then(data => dispatch(fetched(data)))
        .catch(error => dispatch(failed({
            has: true,
            ...error
        })))
}