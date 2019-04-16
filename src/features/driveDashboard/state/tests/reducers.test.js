import { driveDashboard, DrivingButtonStates } from '../reducers';
import { setDrivingButtonState } from '../actions';

describe('driveDashboard reducer test suite', () => {
  
    it('should return initial state', () => {
        
        let state;
        const action = {
            type: '@@RANDOM_ACTION_TYPE'
        };

        expect(driveDashboard(state, action)).toMatchSnapshot();
    });

    it('should set DRIVE with initial state', () => {
        
        let state;
                
        expect(driveDashboard(state, setDrivingButtonState(DrivingButtonStates.DRIVE))).toMatchSnapshot();
    });

    it('should set ERROR with initial state', () => {
        
        let state;
                
        expect(driveDashboard(state, setDrivingButtonState(DrivingButtonStates.ERROR))).toMatchSnapshot();
    });

    it('should set TURNED_OFF with initial state', () => {
        
        let state;
                
        expect(driveDashboard(state, setDrivingButtonState(DrivingButtonStates.TURNED_OFF))).toMatchSnapshot();
    });

    it('should set READY with none initial state', () => {
        
        let state = {
            drivingButtonState: DrivingButtonStates.DRIVE,
            throttleStick: 0
        };
                
        expect(driveDashboard(state, setDrivingButtonState(DrivingButtonStates.READY))).toMatchSnapshot();
    });
});
