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
    
    const getClassName = () => {

        if(drivingStatus === false) {
            return;
        }

        let style;

        if(throttleSpeed > 60 && throttleSpeed <= 100) {
            style = styles.shakeveryfast;
        }
        
        if(throttleSpeed > 40 && throttleSpeed < 60) {
            style = styles.shakefast;
        }

        if(throttleSpeed > 10 && throttleSpeed < 40) {
            style = styles.shakeslow;
        }

        if(throttleSpeed > 0 && throttleSpeed < 10) {
            style = styles.shakeveryslow;
        }

        return style;
    };

    return (
        <div className={getClassName()}
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
