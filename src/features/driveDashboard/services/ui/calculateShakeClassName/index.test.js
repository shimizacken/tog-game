import calculateShakeClassName from './index';

describe('calculateShakeClassName test suite', () => {
  
    it('should return undefined when no drivingStatus passed', () => {
        
        expect(calculateShakeClassName()).toMatchSnapshot();
    });
});
