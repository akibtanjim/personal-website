import { ACTIVE_MENU_ITEM } from "./action";

const initialState = {
  activeItem: "home"
};

function defaultReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIVE_MENU_ITEM:
      return {
        ...state,
        activeItem: action.activeItem
      };
    default:
      return state;
  }
}

export const getDefaults = state => state.defaultReducer;

export default defaultReducer;
