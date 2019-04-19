import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import calculateDrivingStatus from '../driveDashboard/services/ui/calculateDrivingStatus';
import Display from './display';

const ControlCenterDisplayContainer = ({drivingButtonState, throttleSpeed}) => {

    const drivingStatus = useMemo(() => calculateDrivingStatus(drivingButtonState, throttleSpeed));
    
    return <div>
                <Display />
            </div>;
};

const mapStateToProps = state => ({
    drivingButtonState: state.driveDashboard.drivingButtonState,
    throttleSpeed: state.driveDashboard.throttleSpeed
});

export default connect(mapStateToProps)(ControlCenterDisplayContainer);