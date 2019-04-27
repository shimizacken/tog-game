import { lights } from "../reducers";
import { setFrontLightState, setBackLightState, setCabinLightState, setWagonsLightState } from "../actions";

describe('lights reducer test suite', () => {
  
    describe('initial states', () => {
        
        it('should return initial state', () => {
            
            let state;
    
            expect(lights(state, { type: '@@INIT_RANDOM' })).toMatchSnapshot();
        });
    });

    describe('front lights', () => {
      
        it('should set front light on', () => {
            
            let state;
    
            expect(lights(state, setFrontLightState)).toMatchSnapshot();
        });

        it('should set front light off', () => {
            
            const state = {
                frontLightsState: true,
                backLightsState: true,
                cabinLightsState: true,
                wagonsLightsState: true
            };
    
            expect(lights(state, setFrontLightState)).toMatchSnapshot();
        });

        it('should change the front light to on', () => {
            
            const state = {
                frontLightsState: false,
                backLightsState: false,
                cabinLightsState: false,
                wagonsLightsState: false
            };
    
            expect(lights(state, setFrontLightState)).toMatchSnapshot();
        });
    });
    
    describe('back lights', () => {
      
        it('should set back light on', () => {
            
            let state;
    
            expect(lights(state, setBackLightState)).toMatchSnapshot();
        });

        it('should set back light off', () => {
            
            const state = {
                frontLightsState: true,
                backLightsState: true,
                cabinLightsState: true,
                wagonsLightsState: true
            };
    
            expect(lights(state, setBackLightState)).toMatchSnapshot();
        });

        it('should change the back light to on', () => {
            
            const state = {
                frontLightsState: false,
                backLightsState: false,
                cabinLightsState: false,
                wagonsLightsState: false
            };
    
            expect(lights(state, setBackLightState)).toMatchSnapshot();
        });
    });

    describe('cabin lights', () => {
      
        it('should set cabin light on', () => {
            
            let state;
    
            expect(lights(state, setCabinLightState)).toMatchSnapshot();
        });

        it('should set cabin light off', () => {
            
            const state = {
                frontLightsState: true,
                backLightsState: true,
                cabinLightsState: true,
                wagonsLightsState: true
            };
    
            expect(lights(state, setCabinLightState)).toMatchSnapshot();
        });

        it('should change the cabin light to on', () => {
            
            const state = {
                frontLightsState: false,
                backLightsState: false,
                cabinLightsState: false,
                wagonsLightsState: false
            };
    
            expect(lights(state, setCabinLightState)).toMatchSnapshot();
        });
    });
    
    describe('wagons lights', () => {
      
        it('should set wagons light on', () => {
            
            let state;
    
            expect(lights(state, setWagonsLightState)).toMatchSnapshot();
        });

        it('should set wagons light off', () => {
            
            const state = {
                frontLightsState: true,
                backLightsState: true,
                cabinLightsState: true,
                wagonsLightsState: true
            };
    
            expect(lights(state, setWagonsLightState)).toMatchSnapshot();
        });

        it('should change the wagons light to on', () => {
            
            const state = {
                frontLightsState: false,
                backLightsState: false,
                cabinLightsState: false,
                wagonsLightsState: false
            };
    
            expect(lights(state, setWagonsLightState)).toMatchSnapshot();
        });
    });
});
