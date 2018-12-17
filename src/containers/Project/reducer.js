import { LOADING, LOADED, UPDATE_PROJECT } from "./action";

const initialState = {
  loading: false,
  loaded: false
};

function projectReducer(state = initialState, action) {
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
    case UPDATE_PROJECT:
      return {
        ...state,
        loading: false,
        projects: action.project
      };
    default:
      return state;
  }
}

export const getProjects = state => state.projectReducer;

export default projectReducer;
