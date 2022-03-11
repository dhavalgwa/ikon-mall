import { REQUEST, SUCCESS, FAILURE } from './actionType'

export const ACTION_TYPES = {
    GET_SHOPS_LIST_REQUEST: "GET_SHOPS_REQUEST",
    GET_SHOPS_LIST_SUCCESS: "GET_SHOPS_SUCCESS",
    GET_SHOPS_LIST_ERROR: "GET_SHOPS_ERROR",
};

const initialState = {
    shopsList: [],
    shop: {},
    loading: false,
    errorMessage: null
};

const shopData = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_SHOPS_LIST_REQUEST: {
            return {
                ...state, loading: true, errorMessage: null
            }
        }
        case ACTION_TYPES.GET_SHOPS_LIST_SUCCESS: {
            return {
                ...state, loading: false, shopsList: action.payload
            }
        }
        case ACTION_TYPES.GET_SHOPS_LIST_ERROR: {
            return {
                ...state, loading: false, shopsList: [], errorMessage: action.payload
            }
        }
        default:
            return state
    }
}

export default shopData;
