import { createStore, applyMiddleware, compose } from "redux";
import { reducers } from "./reducers";
import { middlewares } from "./middlewares/middlewares";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
