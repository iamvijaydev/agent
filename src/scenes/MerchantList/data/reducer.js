import {
    FETCHING,
    FETCHED,
    FAILED
} from './actions'

const defaultError = {
    has: false,
    status: -1,
    statusText: ''
}
const defaultState = {
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
                ...state,
                isLoading: false,
                data: action.data,
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