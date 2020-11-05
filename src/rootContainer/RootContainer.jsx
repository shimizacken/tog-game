import React, { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DrivingDashboardContainer } from "../features/driveDashboard/DrivingDashboardContainer";
import { SpeedometerContainer } from "../features/speedometer/SpeedometerContainer";
import { ControlCenterDisplayContainer } from "../features/controlCenterDisplay/ControlCenterDisplayContainer";
import { LightsPanelContainer } from "../features/lightsPanel/LightsPanelContainer";
import { calculateShakeClassName } from "../features/driveDashboard/services/ui/calculateShakeClassName/calculateShakeClassName";
import { setDrivingStatus } from "../features/driveDashboard/state/actions";
import { calculateDrivingStatus } from "../features/driveDashboard/services/ui/calculateDrivingStatus/calculateDrivingStatus";
import styles from "./RootContainer.module.scss";

export const RootContainer = () => {
  const dispatch = useDispatch();
  const drivingButtonState = useSelector(
    (state) => state.driveDashboard.drivingButtonState
  );
  const throttleSpeed = useSelector(
    (state) => state.driveDashboard.throttleSpeed
  );

  const drivingStatus = useMemo(
    () => calculateDrivingStatus(drivingButtonState, throttleSpeed),
    [drivingButtonState, throttleSpeed]
  );
  const shakeClassName = useMemo(
    () => calculateShakeClassName(drivingStatus, throttleSpeed, styles),
    [drivingStatus, throttleSpeed]
  );

  useEffect(() => {
    dispatch(setDrivingStatus(drivingStatus));
  }, [dispatch, drivingStatus]);

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
