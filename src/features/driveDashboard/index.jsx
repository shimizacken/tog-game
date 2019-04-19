import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-input-slider';
import rangeMapper from 'range-mapper';
import DrivingButton from '../driveDashboard/components/driveButton';
import { setDrivingButtonState, setThrottleSpeed } from './state/actions';
import calculateDrivingButtonState from './services/ui/calculateDrivingButtonState';
import calculateDrivingStatus from './services/ui/calculateDrivingStatus';
import calculateShakeClassName from './services/ui/calculateShakeClassName';
import DrivingButtonStates from './services/ui/enums/drivingButtonStates';
import Speedometer from '../../components/common/speedometer';
import styles from './index.module.scss';

const DrivingDashboardContainer = ({drivingButtonState, throttleSpeed, setDrivingButtonState, setThrottleSpeed}) => {

    const click = () => setDrivingButtonState(calculateDrivingButtonState(drivingButtonState).drivingButtonStates);
    const change = (axis) => setThrottleSpeed(axis.y);

    const drivingStatus = useMemo(() => calculateDrivingStatus(drivingButtonState, throttleSpeed));
    const shakeClassName = useMemo(() => calculateShakeClassName(drivingStatus, throttleSpeed, styles));
    const interpolate = rangeMapper.clamped(0, 100, -90, 90);

    useEffect(() => {
        setDrivingButtonState(DrivingButtonStates.READY);
    }, []);

    return (
        <div className={shakeClassName}>
            <div>
                <h1>
                    {drivingButtonState} {throttleSpeed} {drivingStatus && 'DRIVING'}
                </h1>
            </div>
        <Speedometer speed={drivingButtonState === DrivingButtonStates.DRIVE ? interpolate(throttleSpeed) : interpolate(0)} />
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
