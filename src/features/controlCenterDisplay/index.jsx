import React from 'react';
import { connect } from 'react-redux';
import Display from './components/display/display';

const ControlCenterDisplayContainer = ({drivingButtonState, throttleSpeed, drivingStatus}) => {
    
    return <div>
                <Display 
                    drivingInfo={`${drivingButtonState} ${drivingStatus}`}
                    warningInfo='some warnings!'
                />
            </div>;
};

const mapStateToProps = state => ({
    drivingButtonState: state.driveDashboard.drivingButtonState,
    throttleSpeed: state.driveDashboard.throttleSpeed,
    drivingStatus: state.driveDashboard.drivingStatus
});

export default connect(mapStateToProps)(ControlCenterDisplayContainer);