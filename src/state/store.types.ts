import { DrivingButtonStates } from "../features/driveDashboard/services/ui/enums/drivingButtonStates";

export interface DriveDashboardState {
  readonly drivingButtonState: DrivingButtonStates;
  readonly throttleSpeed: number;
  readonly drivingStatus: boolean;
}

export interface ControlCenterDisplayState {
  readonly drivingInfo?: string;
  readonly warningInfo?: string;
}

export interface LightsState {
  readonly frontLightsState: boolean;
  readonly backLightsState: boolean;
  readonly cabinLightsState: boolean;
  readonly wagonsLightsState: boolean;
}

export interface RootState {
  driveDashboard: DriveDashboardState;
  controlCenterDisplay: ControlCenterDisplayState;
  lights: LightsState;
}
