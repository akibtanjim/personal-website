import { LOADING, LOADED, UPDATE_EDUCATION } from "./action";

const initialState = {
  loading: false,
  loaded: false
};

function educationReducer(state = initialState, action) {
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
    case UPDATE_EDUCATION:
      return {
        ...state,
        loading: false,
        educations: action.education
      };
    default:
      return state;
  }
}

export const getEducations = state => state.educationReducer;

export default educationReducer;
