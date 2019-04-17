import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Slider from 'react-input-slider';
import DrivingButton from '../driveDashboard/components/driveButton';
import { setDrivingButtonState, setThrottleSpeed } from './state/actions';
import calculateDrivingButtonState from './services/ui/calculateDrivingButtonState';
import calculateDrivingStatus from './services/ui/calculateDrivingStatus';
import styles from './index.module.scss';

const DrivingDashboardContainer = ({drivingButtonState, throttleSpeed, setDrivingButtonState, setThrottleSpeed}) => {

    const click = () => setDrivingButtonState(calculateDrivingButtonState(drivingButtonState).drivingButtonStates);
    
    const change = (axis) => setThrottleSpeed(axis.y);

    const drivingStatus = calculateDrivingStatus(drivingButtonState, throttleSpeed);
    
    return (
        <div className={
            classNames(
                (drivingStatus === true && throttleSpeed < 50) && styles.shakeslow,
                (drivingStatus === true && throttleSpeed >= 50) && styles.shakefast
            )}
        >
        <div>
            <h1>
                {drivingButtonState} {throttleSpeed} {drivingStatus && 'DRIVING'}
            </h1>
        </div>
        <div className={styles.root}>
            <div className={styles.innerwrapper}>
                <div>
                    <DrivingButton 
                        drivingButtonStates={drivingButtonState}
                        onClick={click}
                    />
                </div>
                <div>
                    <Slider 
                        onChange={change}
                        axis='y'
                        y={throttleSpeed}
                        styles={{
                            track: {
                              backgroundColor: '#434343'
                            },
                            active: {
                              backgroundColor: '#222222'
                            },
                            thumb: {
                              width: 80,
                              height: 80,
                              backgroundColor: '#e06666'
                            }
                        }}
                    />
                </div>
            </div>
        </div>
        </div>);
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
