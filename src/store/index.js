import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers/index";
import clientMiddleware from "../reducers/middlewares/clientMiddleware";
import promise from "../helpers/promise";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [clientMiddleware(), thunk, promise];

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(...middleware))
);

export default store;
