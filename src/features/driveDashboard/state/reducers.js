const DrivingButtonStates = {
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
    return state;
 };

 export { driveDashboard };