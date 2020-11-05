import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import rangeMapper from "range-mapper";
import { Speedometer } from "./components/speedometer/Speedometer";
import { DrivingButtonStates } from "../driveDashboard/services/ui/enums/drivingButtonStates";

export const SpeedometerContainer = () => {
  const drivingButtonState = useSelector(
    (state) => state.driveDashboard.drivingButtonState
  );
  const throttleSpeed = useSelector(
    (state) => state.driveDashboard.throttleSpeed
  );

  const interpolate = useMemo(() => rangeMapper.clamped(0, 100, -90, 90), []);

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
