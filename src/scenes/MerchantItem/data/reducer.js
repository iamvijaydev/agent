import {
    FETCHING,
    FETCHED,
    FAILED,
    CLEAR
} from './constants'

const defaultError = {
    has: false,
    status: -1,
    statusText: ''
}
const defaultState = {
    data: {
        id: '',
        firstname: '',
        lastname: '',
        avatarUrl: '',
        email: '',
        phone: '',
        hasPremium: false,
        bids: []
    },
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
                data: action.data,
                isLoading: false,
                error: defaultError
            }
        
        case FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }

        case CLEAR: {
            return defaultState
        }

        case 'RESET_STORE': {
            return defaultState
        }
    
        default:
            return state
    }
}