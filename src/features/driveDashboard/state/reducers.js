import { SET_DRIVE_BUTTON_STATUS, SET_THROTTLE_SPEED } from "./constants";

export const DrivingButtonStates = {
    TURNED_OFF: 'TURNED_OFF',
    READY: 'READY',
    DRIVE: 'DRIVE',
    ERROR: 'ERROR'
};

const initialState = {
    drivingButtonState: DrivingButtonStates.READY,
    throttleSpeed: 0
};

const driveDashboard = (state = initialState, action) => {

    if (action.type === SET_DRIVE_BUTTON_STATUS) {
        
        return {
            ...state,
            drivingButtonState: action.drivingButtonState
        };
    }

    if (action.type === SET_THROTTLE_SPEED) {
        
        return {
            ...state,
            throttleSpeed: action.throttleSpeed
        };
    }

    return state;
 };

 export { driveDashboard };
 