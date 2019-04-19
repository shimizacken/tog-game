import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import rangeMapper from 'range-mapper';
import DrivingButtonStates from '../features/driveDashboard/services/ui/enums/drivingButtonStates';
import DrivingDashboardContainer from '../features/driveDashboard';
import Speedometer from '../components/common/speedometer';
import ControlCenterDisplayContainer from '../features/controlCenterDisplay';
import calculateDrivingStatus from '../features/driveDashboard/services/ui/calculateDrivingStatus';
import calculateShakeClassName from '../features/driveDashboard/services/ui/calculateShakeClassName';
import styles from './index.module.scss';

const RootContainer = ({drivingButtonState, throttleSpeed}) => {

    const interpolate = rangeMapper.clamped(0, 100, -90, 90);
    const drivingStatus = useMemo(() => calculateDrivingStatus(drivingButtonState, throttleSpeed));
    const shakeClassName = useMemo(() => calculateShakeClassName(drivingStatus, throttleSpeed, styles));

    return (
        <div className={shakeClassName}>
            <ControlCenterDisplayContainer />
            <Speedometer speed={drivingButtonState === DrivingButtonStates.DRIVE ? interpolate(throttleSpeed) : interpolate(0)} />
            <DrivingDashboardContainer />
        </div>
    );
};

const mapStateToProps = state => ({
    drivingButtonState: state.driveDashboard.drivingButtonState,
    throttleSpeed: state.driveDashboard.throttleSpeed
});

export default connect(mapStateToProps)(RootContainer);