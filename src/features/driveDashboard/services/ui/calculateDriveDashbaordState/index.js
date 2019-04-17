import { DrivingButtonStates } from '../drivingButtonStates';

const calculateDrivingStatus = (drivingButtonState = DrivingButtonStates.READY, throttleSpeed = 0) => {

    if(drivingButtonState === DrivingButtonStates.DRIVE && throttleSpeed > 0) {
    
        return true;
    }
  
    return false;
};

export default calculateDrivingStatus;
