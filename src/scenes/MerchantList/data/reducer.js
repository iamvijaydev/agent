import {
  FETCHING,
  FETCHED,
  FAILED
} from './constants'

const defaultError = {
  has: false,
  status: -1,
  statusText: ''
}
const defaultState = {
  meta: {
    nextPage: null,
    count: null
  },
  data: [],
  isLoading: false,
  error: defaultError
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        isLoading: true,
        error: defaultError
      }

    case FETCHED:
      return {
        meta: action.result.meta,
        data: action.result.data,
        isLoading: false,
        error: defaultError
      }
    
    case FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    case 'RESET_STORE': {
      return defaultState
    }

    default:
      return state
  }
}