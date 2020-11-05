import React from "react";
import { connect } from "react-redux";
import { Display } from "./components/display/Display";
import { DrivingButtonStates } from "../driveDashboard/services/ui/enums/drivingButtonStates";

const ControlCenterDisplayContainer = ({
  drivingButtonState,
  throttleSpeed,
  drivingStatus,
}) => {
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

const mapStateToProps = (state) => ({
  drivingButtonState: state.driveDashboard.drivingButtonState,
  throttleSpeed: state.driveDashboard.throttleSpeed,
  drivingStatus: state.driveDashboard.drivingStatus,
});

const connected = connect(mapStateToProps)(ControlCenterDisplayContainer);

export { connected as ControlCenterDisplayContainer };
