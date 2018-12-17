import {LOADING, LOADED, UPDATE_INFO} from "./action";

const initialState = {
    loading: false,
    loaded: false
};

function infoReducer(state = initialState, action) {
    console.log("Action", action)
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            };
        case LOADED:
            return {
                ...state,
                loaded: true
            };
        case UPDATE_INFO:
            return {
                ...state,
                loading: false,
                info: action.info
            };
        default:
            return state;
    }
}

export const getGeneralInfo = state => state.infoReducer;

export default infoReducer;
