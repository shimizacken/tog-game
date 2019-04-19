import React, { useMemo, useEffect } from 'react';
import { connect } from 'react-redux';
import rangeMapper from 'range-mapper';
import DrivingButtonStates from '../features/driveDashboard/services/ui/enums/drivingButtonStates';
import DrivingDashboardContainer from '../features/driveDashboard';
import Speedometer from '../features/speedometer';
import ControlCenterDisplayContainer from '../features/controlCenterDisplay';
import calculateDrivingStatus from '../features/driveDashboard/services/ui/calculateDrivingStatus';
import calculateShakeClassName from '../features/driveDashboard/services/ui/calculateShakeClassName';
import { setDrivingStatus } from '../features/driveDashboard/state/actions';
import styles from './index.module.scss';

const RootContainer = ({drivingButtonState, throttleSpeed, setDrivingStatus}) => {

    const interpolate = rangeMapper.clamped(0, 100, -90, 90);
    const drivingStatus = useMemo(() => calculateDrivingStatus(drivingButtonState, throttleSpeed));
    const shakeClassName = useMemo(() => calculateShakeClassName(drivingStatus, throttleSpeed, styles));

    useEffect(() => {
        setDrivingStatus(drivingStatus);
    });

    return (
        <div className={shakeClassName}>
            <div className={styles.innerWrapper}>
                <Speedometer speed={drivingButtonState === DrivingButtonStates.DRIVE ? interpolate(throttleSpeed) : interpolate(0)} />
                <ControlCenterDisplayContainer />
            </div>
            <DrivingDashboardContainer />
        </div>
    );
};

const mapStateToProps = state => ({
    drivingButtonState: state.driveDashboard.drivingButtonState,
    throttleSpeed: state.driveDashboard.throttleSpeed
});

const mapDispatchToProps = ({
    setDrivingStatus: setDrivingStatus
});

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
