import calculateDrivingStatus from ".";
import { DrivingButtonStates } from "../drivingButtonStates";

describe('calculateDrivingStatus test suite', () => {
  
    describe('default driving status', () => {
      
        it('should return defaults which is not driving', () => {
            
            expect(calculateDrivingStatus()).toMatchSnapshot();
        });
    });
    
    describe('not driving at 0 speed', () => {
      
        it('should return not driving when ERROR and 0', () => {
            
            expect(calculateDrivingStatus(DrivingButtonStates.ERROR, 0)).toMatchSnapshot();
        });
    
        it('should return not driving when TURNED_OFF and 0', () => {
            
            expect(calculateDrivingStatus(DrivingButtonStates.TURNED_OFF, 0)).toMatchSnapshot();
        });
    
        it('should return not driving when DRIVE and 0', () => {
            
            expect(calculateDrivingStatus(DrivingButtonStates.DRIVE, 0)).toMatchSnapshot();
        });
    });

    describe('not driving at more than 0 speed', () => {
      
        it('should return not driving when ERROR and 1', () => {

            const throttleSpeed = 1;

            expect(calculateDrivingStatus(DrivingButtonStates.ERROR, throttleSpeed)).toMatchSnapshot();
        });

        it('should return not driving when DRIVE and 50', () => {

            const throttleSpeed = 50;

            expect(calculateDrivingStatus(DrivingButtonStates.ERROR, throttleSpeed)).toMatchSnapshot();
        });

        it('should return not driving when TURNED_OFF and 50', () => {

            const throttleSpeed = 50;

            expect(calculateDrivingStatus(DrivingButtonStates.TURNED_OFF, throttleSpeed)).toMatchSnapshot();
        });

        it('should return not driving when READY and 50', () => {

            const throttleSpeed = 50;

            expect(calculateDrivingStatus(DrivingButtonStates.READY, throttleSpeed)).toMatchSnapshot();
        });
    });
    
    describe('driving', () => {
      
        it('should drive when DRIVE and more than 0', () => {
            
            const throttleSpeed = 50;

        expect(calculateDrivingStatus(DrivingButtonStates.DRIVE, throttleSpeed)).toMatchSnapshot();
        });
    });
    
});
