import { LOADING, LOADED, UPDATE_SKILL } from "./action";

const initialState = {
  loading: false,
  loaded: false
};

function skillReducer(state = initialState, action) {
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
    case UPDATE_SKILL:
      return {
        ...state,
        loading: false,
        skill: action.skill
      };
    default:
      return state;
  }
}

export const getSkills = state => state.skillReducer;

export default skillReducer;
