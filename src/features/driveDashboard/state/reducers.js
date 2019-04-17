import { SET_DRIVE_BUTTON_STATUS, SET_THROTTLE_SPEED } from "./constants";
import { DrivingButtonStates } from "../services/ui/drivingButtonStates";

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
 