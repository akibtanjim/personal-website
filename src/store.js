import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";
import storage from "localforage";
import createExpirationTransform from "redux-persist-transform-expire";

const expireTransform = createExpirationTransform({ expireKey: "expiresAt" });

const persistConfig = {
  key: "root",
  storage: storage,
  transforms: [expireTransform]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const logger = createLogger();
  const enhancers = [applyMiddleware(thunk)];
  enhancers.push(applyMiddleware(logger));
  let store = createStore(persistedReducer, undefined, compose(...enhancers));
  let persistor = persistStore(store);
  return { store, persistor };
};
