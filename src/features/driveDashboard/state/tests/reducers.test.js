import { driveDashboard } from '../reducers';
import { setDrivingButtonState, setThrottleSpeed } from '../actions';
import DrivingButtonStates from '../../services/ui/drivingButtonStates';

describe('driveDashboard reducer test suite', () => {
  
    describe('initial state test suite', () => {
      
        it('should return initial state', () => {
            
            let state;
            const action = {
                type: '@@RANDOM_ACTION_TYPE'
            };
    
            expect(driveDashboard(state, action)).toMatchSnapshot();
        });
    });

    describe('SET_DRIVE_BUTTON_STATUS test suite', () => {
        
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
            
            const state = {
                drivingButtonState: DrivingButtonStates.DRIVE,
                throttleSpeed: 0
            };
                    
            expect(driveDashboard(state, setDrivingButtonState(DrivingButtonStates.READY))).toMatchSnapshot();
        });
    });
    
    describe('SET_THROTTLE_SPEED test suite', () => {
      
        it('should set throttle speed to 20 with initial state', () => {
            
            let state;

            expect(driveDashboard(state, setThrottleSpeed(20))).toMatchSnapshot();
        });

        it('should set throttle speed to 100 with none initial state', () => {
            
            const state = {
                drivingButtonState: DrivingButtonStates.DRIVE,
                throttleSpeed: 50
            };

            expect(driveDashboard(state, setThrottleSpeed(100))).toMatchSnapshot();
        });
    });
});
