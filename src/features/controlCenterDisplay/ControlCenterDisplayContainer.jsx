import React from "react";
import { useSelector } from "react-redux";
import { Display } from "./components/display/display";
import { DrivingButtonStates } from "../driveDashboard/services/ui/enums/drivingButtonStates";

export const ControlCenterDisplayContainer = () => {
  const drivingButtonState = useSelector(
    (state) => state.driveDashboard.drivingButtonState
  );
  const throttleSpeed = useSelector(
    (state) => state.driveDashboard.throttleSpeed
  );
  const drivingStatus = useSelector(
    (state) => state.driveDashboard.drivingStatus
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
