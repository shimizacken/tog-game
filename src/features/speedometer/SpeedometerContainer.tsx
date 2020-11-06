import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Speedometer } from "./components/speedometer/Speedometer";
import { DrivingButtonStates } from "../driveDashboard/services/ui/enums/drivingButtonStates";
import { clamped } from "../../utils/rangeMapper/rangeMapper";
import { RootState } from "../../state/store.types";

export const SpeedometerContainer: React.FC = () => {
  const drivingButtonState = useSelector(
    (state: RootState) => state.driveDashboard.drivingButtonState
  );
  const throttleSpeed = useSelector(
    (state: RootState) => state.driveDashboard.throttleSpeed
  );

  const interpolate = useMemo(() => clamped(0, 100, -90, 90), []);

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
