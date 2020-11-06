import { DrivingButtonStates } from "../features/driveDashboard/services/ui/enums/drivingButtonStates";
import { LightsState } from "../features/lightsPanel/state/reducers";

export interface DriveDashboardState {
  drivingButtonState: DrivingButtonStates;
  throttleSpeed: number;
  drivingStatus: boolean;
}

export interface ControlCenterDisplayState {
  drivingInfo?: string;
  warningInfo?: string;
}

export interface LightState {
  frontLightsState: boolean;
  backLightsState: boolean;
  cabinLightsState: boolean;
  wagonsLightsState: boolean;
}

export interface RootState {
  driveDashboard: DriveDashboardState;
  controlCenterDisplay: ControlCenterDisplayState;
  lights: LightsState;
}
