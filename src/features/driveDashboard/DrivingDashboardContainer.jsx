import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Panel } from "../../components/panel/Panel";
import { DrivingButton } from "./components/driveButton/DrivingButton";
import { DrivingButtonStates } from "./services/ui/enums/drivingButtonStates";
import { ThrottleStick } from "./components/throttleStick/ThrottleStick";
import { setDrivingButtonState, setThrottleSpeed } from "./state/actions";
import { calculateDrivingButtonState } from "./services/ui/calculateDrivingButtonState/calculateDrivingButtonState";

const DrivingDashboardContainer = ({
  drivingButtonState,
  throttleSpeed,
  setDrivingButtonState,
  setThrottleSpeed,
}) => {
  const click = () =>
    setDrivingButtonState(
      calculateDrivingButtonState(drivingButtonState).drivingButtonStates
    );
  const change = (axis) => setThrottleSpeed(axis.y);

  useEffect(() => {
    setDrivingButtonState(DrivingButtonStates.READY);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Panel width="70vw" height="50vh" minWidth="350px">
      <DrivingButton drivingButtonStates={drivingButtonState} onClick={click} />
      <ThrottleStick onChange={change} speed={throttleSpeed} />
    </Panel>
  );
};

const mapStateToProps = (state) => ({
  drivingButtonState: state.driveDashboard.drivingButtonState,
  throttleSpeed: state.driveDashboard.throttleSpeed,
});

const mapDispatchToProps = {
  setDrivingButtonState,
  setThrottleSpeed,
};

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(DrivingDashboardContainer);

export { connected as DrivingDashboardContainer };
