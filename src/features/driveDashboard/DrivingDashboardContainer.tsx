import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Panel } from "../../components/panel/Panel";
import { DrivingButton } from "./components/driveButton/DrivingButton";
import { DrivingButtonStates } from "./services/ui/enums/drivingButtonStates";
import { Axis, ThrottleStick } from "./components/throttleStick/ThrottleStick";
import { setDrivingButtonState, setThrottleSpeed } from "./state/actions";
import { calculateDrivingButtonState } from "./services/ui/calculateDrivingButtonState/calculateDrivingButtonState";
import { RootState } from "../../state/store";

export const DrivingDashboardContainer = () => {
  const dispatch = useDispatch();
  const drivingButtonState = useSelector(
    (state: RootState) => state.driveDashboard.drivingButtonState
  );
  const throttleSpeed = useSelector(
    (state: RootState) => state.driveDashboard.throttleSpeed
  );

  const click = () =>
    dispatch(
      setDrivingButtonState(
        calculateDrivingButtonState(drivingButtonState).drivingButtonStates
      )
    );

  const change = (axis: Axis) => dispatch(setThrottleSpeed(axis.y));

  useEffect(() => {
    dispatch(setDrivingButtonState(DrivingButtonStates.READY));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Panel width="70vw" height="50vh" minWidth="350px">
      <DrivingButton drivingButtonStates={drivingButtonState} onClick={click} />
      <ThrottleStick onChange={change} speed={throttleSpeed} />
    </Panel>
  );
};
