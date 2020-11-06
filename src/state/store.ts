import { createStore, applyMiddleware, compose, Store, Dispatch } from "redux";
import { reducers } from "./reducers";
import { middlewares } from "./middlewares/middlewares";
import { RootState } from "./store.types";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

export const store: Store<RootState> & {
  dispatch: Dispatch;
} = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));
