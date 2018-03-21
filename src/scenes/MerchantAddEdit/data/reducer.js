import {
  SAVING,
  SAVED,
  FAILED,
  RESET
} from './constants'

const defaultError = {
  has: false,
  status: -1,
  statusText: ''
}
const defaultState = {
  isSaving: false,
  hasSaved: null,
  message: '',
  error: defaultError
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SAVING:
      return {
        ...defaultState,
        isSaving: true
      }

    case SAVED:
      return {
        isSaving: false,
        hasSaved: true,
        message: typeof action.result === typeof {} ? action.result.message : 'Merchant saved successfully.',
        error: defaultError
      }
    
    case FAILED:
      return {
        isSaving: false,
        hasSaved: false,
        message: '',
        error: action.error
      }

    case RESET:
      return defaultState;

    case 'RESET_STORE': {
      return defaultState
    }

    default:
      return state
  }
}