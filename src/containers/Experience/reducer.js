import { LOADING, LOADED, UPDATE_EXPERIENCE } from "./action";

const initialState = {
  loading: false,
  loaded: false
};

function experienceReducer(state = initialState, action) {
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
    case UPDATE_EXPERIENCE:
      return {
        ...state,
        loading: false,
        experiences: action.experience
      };
    default:
      return state;
  }
}

export const getWorkExperiences = state => state.experienceReducer;

export default experienceReducer;
