import DrivingButtonStates from '../drivingButtonStates';
import DrivingButtonColors from '../drivingButtonColors';

const States = {
    [DrivingButtonStates.TURNED_OFF]: {
        drivingButtonStates: DrivingButtonStates.TURNED_OFF,
        color: DrivingButtonColors.TURNED_OFF,
        seconds: 2
    },
    [DrivingButtonStates.READY]: {
        drivingButtonStates: DrivingButtonStates.READY,
        color: DrivingButtonColors.READY,
        seconds: 2
    },
    [DrivingButtonStates.DRIVE]: {
        drivingButtonStates: DrivingButtonStates.DRIVE,
        color: DrivingButtonColors.DRIVE,
        seconds: 2
    },
    [DrivingButtonStates.ERROR]: {
        drivingButtonStates: DrivingButtonStates.ERROR,
        color: DrivingButtonColors.ERROR,
        seconds: 0
    }
};

const calculateDrivingButtonState = (currentState = DrivingButtonStates.TURNED_OFF) => {

    const state = States[DrivingButtonStates.TURNED_OFF];

    if (currentState === DrivingButtonStates.ERROR) {
        
        return States[currentState];
    }

    if (currentState === DrivingButtonStates.TURNED_OFF) {
        
        return States[DrivingButtonStates.READY];
    }

    if (currentState === DrivingButtonStates.READY) {
        
        return States[DrivingButtonStates.DRIVE];
    }

    if (currentState === DrivingButtonStates.DRIVE) {
        
        return States[DrivingButtonStates.READY];
    }

    return state;
};

export default calculateDrivingButtonState;