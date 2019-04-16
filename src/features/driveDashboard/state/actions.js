import { SET_DRIVE_BUTTON_STATUS, SET_THROTTLE_SPEED } from "./constants";

export const setDrivingButtonState = drivingButtonState => ({
  type: SET_DRIVE_BUTTON_STATUS,
  drivingButtonState
});

export const setThrottleSpeed = throttleSpeed => ({
  type: SET_THROTTLE_SPEED,
  throttleSpeed
});
