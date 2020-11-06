import { createStore, applyMiddleware, compose } from "redux";
import { reducers } from "./reducers";
import { middlewares } from "./middlewares/middlewares";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export interface RootState {
  driveDashboard: {
    drivingButtonState: string;
    throttleSpeed: number;
    drivingStatus: boolean;
  };
  controlCenterDisplay: {
    drivingInfo?: string;
    warningInfo?: string;
  };
  lights: {
    frontLightsState: boolean;
    backLightsState: boolean;
    cabinLightsState: boolean;
    wagonsLightsState: boolean;
  };
}

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);
