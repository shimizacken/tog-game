import { combineReducers } from "redux";
import { driveDashboard } from "../features/driveDashboard/state/reducers";
import { controlCenterDisplay } from "../features/controlCenterDisplay/state/reducers";
import { lights } from "../features/lightsPanel/state/reducers";

export const reducers = combineReducers({
  driveDashboard,
  controlCenterDisplay,
  lights,
});
