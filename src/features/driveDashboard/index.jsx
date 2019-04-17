import React from 'react';
import { connect } from 'react-redux';
import DrivingButton from '../driveDashboard/components/driveButton';
import styles from './index.module.scss';
import { setDrivingButtonState } from './state/actions';
import calculateDrivingButtonState from './services/ui/calculateDrivingButtonState'

const DrivingDashboardContainer = ({drivingButtonState, setDrivingButtonState}) => {

    const click = () => setDrivingButtonState(calculateDrivingButtonState(drivingButtonState).drivingButtonStates);
    
    return (
        <div className={styles.root}>
            <h1>
                {drivingButtonState}
            </h1>
            <div>
                <DrivingButton 
                    drivingButtonStates={drivingButtonState}
                    onClick={click}
                />
            </div>
        </div>);
};

const mapStateToProps = state => ({
    drivingButtonState: state.driveDashboard.drivingButtonState
});

const mapDispatchToProps = {
    setDrivingButtonState
};

export default connect(mapStateToProps, mapDispatchToProps)(DrivingDashboardContainer);
