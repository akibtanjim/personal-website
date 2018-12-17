import { LOADING, LOADED, UPDATE_PUBLICATION } from "./action";

const initialState = {
  loading: false,
  loaded: false
};

function publicationReducer(state = initialState, action) {
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
    case UPDATE_PUBLICATION:
      return {
        ...state,
        loading: false,
        publications: action.publication
      };
    default:
      return state;
  }
}

export const getPublications = state => state.publicationReducer;

export default publicationReducer;
