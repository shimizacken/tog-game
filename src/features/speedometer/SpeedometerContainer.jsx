import React from "react";
import { connect } from "react-redux";
import rangeMapper from "range-mapper";
import { Speedometer } from "./components/speedometer/Speedometer";
import { DrivingButtonStates } from "../driveDashboard/services/ui/enums/drivingButtonStates";

const SpeedometerContainer = ({ drivingButtonState, throttleSpeed }) => {
  const interpolate = rangeMapper.clamped(0, 100, -90, 90);

  return (
    <Speedometer
      speed={
        drivingButtonState === DrivingButtonStates.DRIVE
          ? interpolate(throttleSpeed)
          : interpolate(0)
      }
    />
  );
};

const mapStateToProps = (state) => ({
  drivingButtonState: state.driveDashboard.drivingButtonState,
  throttleSpeed: state.driveDashboard.throttleSpeed,
});

const connected = connect(mapStateToProps)(SpeedometerContainer);

export { connected as SpeedometerContainer };
