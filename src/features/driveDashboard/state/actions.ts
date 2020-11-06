import {
  SET_DRIVE_BUTTON_STATUS,
  SET_THROTTLE_SPEED,
  SET_DRIVE_BUTTON_SWITCHING_STATUS,
  SET_DRIVING_STATUS,
} from "./constants";
import { DrivingButtonStates } from "../services/ui/enums/drivingButtonStates";

export interface SetDrivingButtonState {
  type: string;
  drivingButtonState: DrivingButtonStates;
}

export interface SetDrivingButtonSwitchingState {
  type: string;
  throttleSpeed: number;
  meta: {
    throttle: number;
  };
}

export interface SetDrivingStatus {
  type: string;
  drivingStatus: boolean;
}

export const setDrivingButtonState = (
  drivingButtonState: DrivingButtonStates
): SetDrivingButtonState => ({
  type: SET_DRIVE_BUTTON_STATUS,
  drivingButtonState,
});

export const setDrivingButtonSwitchingState = (): SetDrivingButtonState => ({
  type: SET_DRIVE_BUTTON_SWITCHING_STATUS,
  drivingButtonState: DrivingButtonStates.SWITCHING,
});

export const setThrottleSpeed = (
  throttleSpeed: number
): SetDrivingButtonSwitchingState => ({
  type: SET_THROTTLE_SPEED,
  throttleSpeed,
  meta: {
    throttle: 10,
  },
});

export const setDrivingStatus = (drivingStatus: boolean): SetDrivingStatus => ({
  type: SET_DRIVING_STATUS,
  drivingStatus,
});
