import React from 'react';
import { connect } from 'react-redux';
import rangeMapper from 'range-mapper';
import DrivingButtonStates from './features/driveDashboard/services/ui/enums/drivingButtonStates';
import DrivingDashboardContainer from './features/driveDashboard';
import Speedometer from './components/common/speedometer';

const MainTempContainer = ({drivingButtonState, throttleSpeed}) => {

    const interpolate = rangeMapper.clamped(0, 100, -90, 90);

    return (
        <div>
            <Speedometer speed={drivingButtonState === DrivingButtonStates.DRIVE ? interpolate(throttleSpeed) : interpolate(0)} />
            <DrivingDashboardContainer />
        </div>
    );
};

const mapStateToProps = state => ({
    drivingButtonState: state.driveDashboard.drivingButtonState,
    throttleSpeed: state.driveDashboard.throttleSpeed
});

// const mapDispatchToProps = {
//     setDrivingButtonState,
//     setThrottleSpeed
// };

export default connect(mapStateToProps)(MainTempContainer);
