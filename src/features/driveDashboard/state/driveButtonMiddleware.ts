import { Middleware } from "redux";
import { setDrivingButtonSwitchingState } from "./actions";
import { SET_DRIVE_BUTTON_STATUS } from "./constants";

const throttled: Record<string, boolean> = {};

export const driveButtonMiddleware: Middleware = ({ dispatch }) => (next) => (
  action
) => {
  if (action.type !== SET_DRIVE_BUTTON_STATUS) {
    return next(action);
  }

  if (throttled[action.type]) {
    return;
  }

  throttled[action.type] = true;
  dispatch(setDrivingButtonSwitchingState());

  setTimeout(() => {
    throttled[action.type] = false;
    next(action);
  }, 1500);
};
