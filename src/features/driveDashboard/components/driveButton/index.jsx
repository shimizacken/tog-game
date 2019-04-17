import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DrivingButtonStates from '../../services/ui/enums/drivingButtonStates';
import styles from './index.module.scss';

const DriveButton = ({drivingButtonStates, onClick}) => {

    let color;

    if (drivingButtonStates === DrivingButtonStates.TURNED_OFF) {
        color = styles.turnedoff;
    }

    if (drivingButtonStates === DrivingButtonStates.READY) {
        color = styles.ready;
    }

    if (drivingButtonStates === DrivingButtonStates.DRIVE) {
        color = styles.drive;
    }

    if (drivingButtonStates === DrivingButtonStates.ERROR) {
        color = styles.error;
    }

    return (
        <button 
            className={classNames(styles.root, color)}
            onClick={onClick}
        >
        </button>);
};

DriveButton.propTypes = {
    drivingButtonStates: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default DriveButton;
