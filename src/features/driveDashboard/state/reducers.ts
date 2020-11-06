import {
  SET_DRIVE_BUTTON_STATUS,
  SET_THROTTLE_SPEED,
  SET_DRIVE_BUTTON_SWITCHING_STATUS,
  SET_DRIVING_STATUS,
} from "./constants";
import { DrivingButtonStates } from "../services/ui/enums/drivingButtonStates";
import {
  SetDrivingButtonState,
  SetDrivingButtonSwitchingState,
  SetDrivingStatus,
} from "./actions";
import { Action } from "redux";
import type { DriveDashboardState } from "../../../state/store.types";

const driveDashboardInitialState: DriveDashboardState = {
  drivingButtonState: DrivingButtonStates.TURNED_OFF,
  throttleSpeed: 0,
  drivingStatus: false,
};

export const driveDashboard = (
  state = driveDashboardInitialState,
  action: Action
) => {
  if (action.type === SET_DRIVE_BUTTON_STATUS) {
    return {
      ...state,
      drivingButtonState: (action as SetDrivingButtonState).drivingButtonState,
    };
  }

  if (action.type === SET_DRIVE_BUTTON_SWITCHING_STATUS) {
    return {
      ...state,
      drivingButtonState: (action as SetDrivingButtonState).drivingButtonState,
    };
  }

  if (action.type === SET_THROTTLE_SPEED) {
    return {
      ...state,
      throttleSpeed: (action as SetDrivingButtonSwitchingState).throttleSpeed,
    };
  }

  if (action.type === SET_DRIVING_STATUS) {
    return {
      ...state,
      drivingStatus: (action as SetDrivingStatus).drivingStatus,
    };
  }

  return state;
};
