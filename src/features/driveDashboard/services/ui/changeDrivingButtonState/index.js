import { DrivingButtonStates } from '../drivingButtonStates';
import DrivingButtonColors from '../drivingButtonColors';

const calculateDrivingButtonState = (currentState = DrivingButtonStates.TURNED_OFF) => {

    const state = {
        drivingButtonStates: currentState,
        color: DrivingButtonColors.TURNED_OFF,
        seconds: 2
    };

    if (currentState === DrivingButtonStates.TURNED_OFF) {
        
        return {
            drivingButtonStates: DrivingButtonStates.READY,
            color: DrivingButtonColors.READY,
            seconds: 2
        };
    }

    if (currentState === DrivingButtonStates.READY) {
        
        return {
            drivingButtonStates: DrivingButtonStates.DRIVE,
            color: DrivingButtonColors.DRIVE,
            seconds: 2
        };
    }

    if (currentState === DrivingButtonStates.DRIVE) {
        
        return {
            drivingButtonStates: DrivingButtonStates.READY,
            color: DrivingButtonColors.READY,
            seconds: 2
        };
    }

    return state;
};

export default calculateDrivingButtonState;