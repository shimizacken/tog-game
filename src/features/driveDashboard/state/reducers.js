const DrivingButtonStates = {
    TURNED_OFF: 0,
    READY: 1,
    DRIVE: 2,
    ERROR: 3
};

const initialState = {
    drivingButtonState: DrivingButtonStates.READY,
    throttleStick: 0
};

const driveDashboard = (state = initialState, action) => {
    return state;
 };

 export { driveDashboard };