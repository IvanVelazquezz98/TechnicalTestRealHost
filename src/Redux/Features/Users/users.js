import {createStructuredSelector} from 'reselect';

export const NAME = 'users';

// Action Types
const LIST_TRY = '[users]/LIST_TRY';
const LIST_SUCCESS = '[users]/LIST_SUCCESS';
const LIST_FAILED = '[users]/LIST_FAILED';

const SEARCH_TRY = '[users]/SEARCH_TRY';
const SEARCH_FAILED = '[users]/SEARCH_FAILED'
const SEARCH_SUCCESS = '[users]/SEARCH_SUCCESS';

// Initial State:
const initialState = {
    dataSource: [],
    isLoading: false,
}

// REDUCER:
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case actionTypes.LIST_TRY:

            return { ...state,
                 isLoading: true }

        case actionTypes.LIST_FAILED:
            return { ...state, 
                isLoading: false }

        case actionTypes.LIST_SUCCESS:
            return { ...state,
                isLoading: false,
                dataSource: action.data }

        case actionTypes.SEARCH_SUCCESS:
            return { ...state, 
                isLoading: false, 
                dataSource: action.dataFilter }

        case actionTypes.SEARCH_FAILED:
            return { ...state, 
                isLoading: false, 
                dataSource: action.data }
        default:
            return state
    }
}

function list() {
    return {type: LIST_TRY}
}
function search(query) {
    return {type: SEARCH_TRY , query , }
}

const users = (state) => state[NAME];

export const selector = createStructuredSelector({
    users,
})

export const actionCreators = {
    list,
    search
}

export const actionTypes = {
    LIST_TRY,
    LIST_FAILED,
    LIST_SUCCESS,
    SEARCH_TRY,
    SEARCH_FAILED,
    SEARCH_SUCCESS
}