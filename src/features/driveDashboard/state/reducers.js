import { SET_DRIVE_BUTTON_STATUS } from "./constants";

export const DrivingButtonStates = {
    TURNED_OFF: 'TURNED_OFF',
    READY: 'READY',
    DRIVE: 'DRIVE',
    ERROR: 'ERROR'
};

const initialState = {
    drivingButtonState: DrivingButtonStates.READY,
    throttleStick: 0
};

const driveDashboard = (state = initialState, action) => {

    if (action.type === SET_DRIVE_BUTTON_STATUS) {
        console.log(state, action);
        
        return {
            ...state,
            drivingButtonState: action.drivingButtonState
        }
    }

    return state;
 };

 export { driveDashboard };