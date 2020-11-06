import React from "react";
import { useSelector } from "react-redux";
import { Display } from "./components/display/Display";
import { DrivingButtonStates } from "../driveDashboard/services/ui/enums/drivingButtonStates";
import { RootState } from "../../state/store.types";

export const ControlCenterDisplayContainer: React.FC = () => {
  const drivingButtonState = useSelector(
    (state: RootState) => state.driveDashboard.drivingButtonState
  );
  const throttleSpeed = useSelector(
    (state: RootState) => state.driveDashboard.throttleSpeed
  );
  const drivingStatus = useSelector(
    (state: RootState) => state.driveDashboard.drivingStatus
  );

  const drive = drivingStatus ? "Tog is driving" : "";
  const buttonStatus =
    drivingButtonState !== DrivingButtonStates.SWITCHING
      ? drivingButtonState
      : "";
  const drivingInfo = `${buttonStatus} ${drive} Speed: ${throttleSpeed}`;

  return (
    <div>
      <Display drivingInfo={drivingInfo} warningInfo="some warnings!" />
    </div>
  );
};
