import React, { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DrivingDashboardContainer } from "../driveDashboard/DrivingDashboardContainer";
import { SpeedometerContainer } from "../speedometer/SpeedometerContainer";
import { ControlCenterDisplayContainer } from "../controlCenterDisplay/ControlCenterDisplayContainer";
import { LightsPanelContainer } from "../lightsPanel/LightsPanelContainer";
import { calculateShakeClassName } from "../driveDashboard/services/ui/calculateShakeClassName/calculateShakeClassName";
import { setDrivingStatus } from "../driveDashboard/state/actions";
import { calculateDrivingStatus } from "../driveDashboard/services/ui/calculateDrivingStatus/calculateDrivingStatus";
import styles from "./RootContainer.module.scss";
import { RootState } from "../../state/store";

export const RootContainer: React.FC = () => {
  const dispatch = useDispatch();
  const drivingButtonState = useSelector(
    (state: RootState) => state.driveDashboard.drivingButtonState
  );
  const throttleSpeed = useSelector(
    (state: RootState) => state.driveDashboard.throttleSpeed
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
