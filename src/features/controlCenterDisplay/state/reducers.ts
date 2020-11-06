import type { ControlCenterDisplayState } from "../../../state/store.types";

const initialState: ControlCenterDisplayState = {
  drivingInfo: "",
  warningInfo: "",
};

export const controlCenterDisplay = (state = initialState) => {
  return state;
};
