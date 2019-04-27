import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import DrivingButton from '../driveDashboard/components/driveButton';
import { setDrivingButtonState, setThrottleSpeed } from './state/actions';
import calculateDrivingButtonState from './services/ui/calculateDrivingButtonState';
import DrivingButtonStates from './services/ui/enums/drivingButtonStates';
import ThrottleStick from './components/throttleStick';
import styles from './index.module.scss';

const DrivingDashboardContainer = ({drivingButtonState, throttleSpeed, setDrivingButtonState, setThrottleSpeed, drivingStatus}) => {

    const click = () => setDrivingButtonState(calculateDrivingButtonState(drivingButtonState).drivingButtonStates);
    const change = (axis) => setThrottleSpeed(axis.y);

    useEffect(() => {
        setDrivingButtonState(DrivingButtonStates.READY);
    }, []);

    return (
        <div className={styles.root}>
            <div className={styles.innerwrapper}>
                <DrivingButton 
                    drivingButtonStates={drivingButtonState}
                    onClick={click}
                />
                <ThrottleStick 
                    onChange={change}
                    speed={throttleSpeed}
                />
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    drivingButtonState: state.driveDashboard.drivingButtonState,
    throttleSpeed: state.driveDashboard.throttleSpeed
});

const mapDispatchToProps = {
    setDrivingButtonState,
    setThrottleSpeed
};

export default connect(mapStateToProps, mapDispatchToProps)(DrivingDashboardContainer);
