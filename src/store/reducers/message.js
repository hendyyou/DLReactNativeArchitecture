import {
    FETCH_MESSAGE_LIST,
    FETCH_MESSAGE_LIST_SUCCESS,
    FETCH_MESSAGE_LIST_FAIL,
    REMOVE_MESSAGE_WITH_ID
} from '../types/message'

const initialState = {
    list: [],
    loading: false,
    error: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_MESSAGE_LIST: 
            return {
                ...state,
                loading: true,
                list: [],
            }
        case FETCH_MESSAGE_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                list: action.payload.data.items
            }
        case FETCH_MESSAGE_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error.message
            }
        case REMOVE_MESSAGE_WITH_ID: {
            const { itemId } = action.payload
            return {
                ...state,
                list: state.list.filter(l => l.id !== itemId)
            }
        }
        default: 
            return state
    }
}
