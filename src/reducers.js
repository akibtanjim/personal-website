import { combineReducers } from "redux";
import defaultReducer from "./reducer";

const appReducer = combineReducers({ defaultReducer });

const rootReducer = (state, action) => {
  // if (action.type === "LOG_OUT") {     state = {};
  // storage.removeItem("persist:login");
  // storage.removeItem("persist:userDetails");
  // storage.removeItem("persist:onboarding"); }

  return appReducer(state, action);
};

export default rootReducer;
