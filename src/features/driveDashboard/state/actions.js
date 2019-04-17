import { SET_DRIVE_BUTTON_STATUS, SET_THROTTLE_SPEED, SET_DRIVE_BUTTON_SWITCHING_STATUS } from "./constants";
import DrivingButtonStates from "../services/ui/enums/drivingButtonStates";

export const setDrivingButtonState = drivingButtonState => ({
  type: SET_DRIVE_BUTTON_STATUS,
  drivingButtonState
});

export const setDrivingButtonSwitchingState = () => ({
  type: SET_DRIVE_BUTTON_SWITCHING_STATUS,
  drivingButtonState: DrivingButtonStates.SWITCHING
});

export const setThrottleSpeed = throttleSpeed => ({
  type: SET_THROTTLE_SPEED,
  throttleSpeed,
  meta: {
    throttle: 500
  }
});
