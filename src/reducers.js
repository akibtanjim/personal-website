import { combineReducers } from "redux";
import defaultReducer from "./reducer";
import infoReducer from "./containers/Home/reducer";
import experienceReducer from "./containers/Experience/reducer";
import educationReducer from "./containers/Education/reducer";
import projectReducer from "./containers/Project/reducer";
import skillReducer from "./containers/Skill/reducer";
import publicationReducer from "./containers/Publication/reducer";

const appReducer = combineReducers({
  defaultReducer,
  infoReducer,
  experienceReducer,
  educationReducer,
  projectReducer,
  skillReducer,
  publicationReducer
});

const rootReducer = (state, action) => {
  // if (action.type === "LOG_OUT") {     state = {};
  // storage.removeItem("persist:login");
  // storage.removeItem("persist:userDetails");
  // storage.removeItem("persist:onboarding"); }

  return appReducer(state, action);
};

export default rootReducer;
