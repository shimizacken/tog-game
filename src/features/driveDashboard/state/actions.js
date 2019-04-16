import { SET_DRIVE_BUTTON_STATUS } from "./constants";

export const setDrivingButtonState = drivingButtonState => ({
  type: SET_DRIVE_BUTTON_STATUS,
  drivingButtonState
});
