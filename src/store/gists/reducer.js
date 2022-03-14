import {GET_GISTS_FAILURE, GET_GISTS_REQUEST, GET_GISTS_SUCCESS} from "./actions";

export const STATUSES = {
    IDLE: 0,
    REQUEST: 1,
    SUCCESS: 2,
    FAILURE: 3
}

const initialState = {
    gists: [],
    request: STATUSES.IDLE,
    error: null,
    loading: false
}

const gistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GISTS_REQUEST:
            return {
                ...state,
                request: STATUSES.REQUEST,
                gists: [],
                error: null,
                loading: true
            }
        case GET_GISTS_SUCCESS:
            console.log("GET_GISTS_SUCCESS", action);
            return {
                ...state,
                gists: action.payload,
                request: STATUSES.SUCCESS,
                error: null,
                loading: false
            }
        case GET_GISTS_FAILURE:
            return {
                ...state,
                error: action.payload,
                gists: [],
                request: STATUSES.FAILURE,
                loading: false
            }

        default:
            return state;
    }
}

export default gistsReducer;
