import React, { useMemo, useEffect } from "react";
import { connect } from "react-redux";
import DrivingDashboardContainer from "../features/driveDashboard/DrivingDashboardContainer";
import SpeedometerContainer from "../features/speedometer/SpeedometerContainer";
import ControlCenterDisplayContainer from "../features/controlCenterDisplay/ControlCenterDisplayContainer";
import LightsPanelContainer from "../features/lightsPanel/LightsPanelContainer";
import { calculateShakeClassName } from "../features/driveDashboard/services/ui/calculateShakeClassName/calculateShakeClassName";
import { setDrivingStatus } from "../features/driveDashboard/state/actions";
import { calculateDrivingStatus } from "../features/driveDashboard/services/ui/calculateDrivingStatus/calculateDrivingStatus";
import styles from "./RootContainer.module.scss";

const RootContainer = ({
  drivingButtonState,
  throttleSpeed,
  setDrivingStatus,
}) => {
  const drivingStatus = useMemo(
    () => calculateDrivingStatus(drivingButtonState, throttleSpeed),
    [drivingButtonState, throttleSpeed]
  );
  const shakeClassName = useMemo(
    () => calculateShakeClassName(drivingStatus, throttleSpeed, styles),
    [drivingStatus, throttleSpeed]
  );

  useEffect(() => {
    setDrivingStatus(drivingStatus);
  });

  return (
    <div className={shakeClassName}>
      <div className={styles.innerWrapper}>
        <SpeedometerContainer />
        <ControlCenterDisplayContainer />
        <LightsPanelContainer />
      </div>
      <DrivingDashboardContainer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  drivingButtonState: state.driveDashboard.drivingButtonState,
  throttleSpeed: state.driveDashboard.throttleSpeed,
});

const mapDispatchToProps = {
  setDrivingStatus: setDrivingStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
