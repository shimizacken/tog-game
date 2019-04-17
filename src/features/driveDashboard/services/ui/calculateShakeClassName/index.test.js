import calculateShakeClassName from './index';

describe('calculateShakeClassName test suite', () => {
  
    const mockStyles = {
        shakeveryslow: 'shakeveryslow',
        shakeslow: 'shakeslow',
        shakefast: 'shakefast',
        shakeveryfast: 'shakeveryfast',
        shakeveryveryfast: 'shakeveryveryfast'
    };

    describe('return undefined', () => {
      
        it('should return undefined when no drivingStatus passed', () => {
        
            expect(calculateShakeClassName()).toMatchSnapshot();
        });
    
        it('should return undefined when drivingStatus is false', () => {
            
            const drivingStatus = false;
            const throttleSpeed = 0;
            const styles = {};
    
            expect(calculateShakeClassName(drivingStatus, throttleSpeed, styles)).toMatchSnapshot();
        });
    
        it('should return undefined when drivingStatus is true and styles is undefined', () => {
            
            const drivingStatus = false;
            const throttleSpeed = 0;
            let styles;
    
            expect(calculateShakeClassName(drivingStatus, throttleSpeed, styles)).toMatchSnapshot();
        });
    
        it('should return undefined when drivingStatus is true but speed is zero', () => {
            
            const drivingStatus = true;
            const throttleSpeed = 0;
            let styles;
    
            expect(calculateShakeClassName(drivingStatus, throttleSpeed, styles)).toMatchSnapshot();
        });
    });
    

    describe('valid class names', () => {
      
        it('should return shakeveryslow when speed is higher than 0 and lower or equal to 20', () => {
        
            const drivingStatus = true;
            const throttleSpeed = 1;
    
            expect(calculateShakeClassName(drivingStatus, throttleSpeed, mockStyles)).toMatchSnapshot();
        });

        it('should return shakeslow when speed is higher than 10 and lower or equal to 40', () => {
        
            const drivingStatus = true;
            const throttleSpeed = 21;
    
            expect(calculateShakeClassName(drivingStatus, throttleSpeed, mockStyles)).toMatchSnapshot();
        });

        it('should return shakefast when speed is higher than 40 and lower or equal to 60', () => {
        
            const drivingStatus = true;
            const throttleSpeed = 41;
    
            expect(calculateShakeClassName(drivingStatus, throttleSpeed, mockStyles)).toMatchSnapshot();
        });

        it('should return shakeveryfast when speed is higher than 60 and lower or equal to 100', () => {
        
            const drivingStatus = true;
            const throttleSpeed = 61;
    
            expect(calculateShakeClassName(drivingStatus, throttleSpeed, mockStyles)).toMatchSnapshot();
        });

        it('should return shakeveryveryfast when speed is higher than 80 and lower or equal to 100', () => {
        
            const drivingStatus = true;
            const throttleSpeed = 81;
    
            expect(calculateShakeClassName(drivingStatus, throttleSpeed, mockStyles)).toMatchSnapshot();
        });
    });
    
});
