import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-input-slider';
import DrivingButton from '../driveDashboard/components/driveButton';
import { setDrivingButtonState, setThrottleSpeed } from './state/actions';
import calculateDrivingButtonState from './services/ui/calculateDrivingButtonState';
import DrivingButtonStates from './services/ui/enums/drivingButtonStates';
import styles from './index.module.scss';

const DrivingDashboardContainer = ({drivingButtonState, throttleSpeed, setDrivingButtonState, setThrottleSpeed, drivingStatus}) => {

    const click = () => setDrivingButtonState(calculateDrivingButtonState(drivingButtonState).drivingButtonStates);
    const change = (axis) => setThrottleSpeed(axis.y);

    useEffect(() => {
        setDrivingButtonState(DrivingButtonStates.READY);
    }, []);

    return (
        <div>
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
