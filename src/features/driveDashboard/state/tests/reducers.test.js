import { driveDashboard } from '../reducers';

describe('driveDashboard reducer test suite', () => {
  
    it('should return initial state', () => {
        
        let state;
        const action = {
            type: '@@RANDOM_ACTION_TYPE'
        }

        expect(driveDashboard(state, action)).toMatchSnapshot();        
    });
});
