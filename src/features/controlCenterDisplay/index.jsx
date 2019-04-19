import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import calculateDrivingStatus from '../driveDashboard/services/ui/calculateDrivingStatus';

const ControlCenterDisplayContainer = ({drivingButtonState, throttleSpeed}) => {

    const drivingStatus = useMemo(() => calculateDrivingStatus(drivingButtonState, throttleSpeed));
    
    return <div>
                <h1>
                    {drivingButtonState} {throttleSpeed} {drivingStatus && 'DRIVING'}
                </h1>
            </div>;
};

const mapStateToProps = state => ({
    drivingButtonState: state.driveDashboard.drivingButtonState,
    throttleSpeed: state.driveDashboard.throttleSpeed
});

export default connect(mapStateToProps)(ControlCenterDisplayContainer);