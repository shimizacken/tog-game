import { lights } from "../reducers";
import { setFrontLightState, setBackLightState, setCabinLightState, setWagonsLightState } from "../actions";
import { LightStates } from "../../bl/enums";

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
    
            expect(lights(state, setFrontLightState(LightStates.ON))).toMatchSnapshot();
        });

        it('should set front light off', () => {
            
            let state;
    
            expect(lights(state, setFrontLightState(LightStates.OFF))).toMatchSnapshot();
        });

        it('should set front light error', () => {
            
            let state;
    
            expect(lights(state, setFrontLightState(LightStates.ERROR))).toMatchSnapshot();
        });

        it('should change the front light to on', () => {
            
            const state = {
                frontLightsState: LightStates.OFF,
                backLightsState: LightStates.OFF,
                cabinLightsState: LightStates.OFF,
                wagonsLightsState: LightStates.OFF
            };
    
            expect(lights(state, setFrontLightState(LightStates.ON))).toMatchSnapshot();
        });
    });
    
    describe('back lights', () => {
      
        it('should set back light on', () => {
            
            let state;
    
            expect(lights(state, setBackLightState(LightStates.ON))).toMatchSnapshot();
        });

        it('should set back light off', () => {
            
            let state;
    
            expect(lights(state, setBackLightState(LightStates.OFF))).toMatchSnapshot();
        });

        it('should set front back error', () => {
            
            let state;
    
            expect(lights(state, setBackLightState(LightStates.ERROR))).toMatchSnapshot();
        });

        it('should change the back light to on', () => {
            
            const state = {
                frontLightsState: LightStates.OFF,
                backLightsState: LightStates.OFF,
                cabinLightsState: LightStates.OFF,
                wagonsLightsState: LightStates.OFF
            };
    
            expect(lights(state, setBackLightState(LightStates.ON))).toMatchSnapshot();
        });
    });

    describe('cabin lights', () => {
      
        it('should set cabin light on', () => {
            
            let state;
    
            expect(lights(state, setCabinLightState(LightStates.ON))).toMatchSnapshot();
        });

        it('should set cabin light off', () => {
            
            let state;
    
            expect(lights(state, setCabinLightState(LightStates.OFF))).toMatchSnapshot();
        });

        it('should set front cabin error', () => {
            
            let state;
    
            expect(lights(state, setCabinLightState(LightStates.ERROR))).toMatchSnapshot();
        });

        it('should change the cabin light to on', () => {
            
            const state = {
                frontLightsState: LightStates.OFF,
                backLightsState: LightStates.OFF,
                cabinLightsState: LightStates.OFF,
                wagonsLightsState: LightStates.OFF
            };
    
            expect(lights(state, setCabinLightState(LightStates.ON))).toMatchSnapshot();
        });
    });
    
    describe('wagons lights', () => {
      
        it('should set wagons light on', () => {
            
            let state;
    
            expect(lights(state, setWagonsLightState(LightStates.ON))).toMatchSnapshot();
        });

        it('should set wagons light off', () => {
            
            let state;
    
            expect(lights(state, setWagonsLightState(LightStates.OFF))).toMatchSnapshot();
        });

        it('should set front wagons error', () => {
            
            let state;
    
            expect(lights(state, setWagonsLightState(LightStates.ERROR))).toMatchSnapshot();
        });

        it('should change the wagons light to on', () => {
            
            const state = {
                frontLightsState: LightStates.OFF,
                backLightsState: LightStates.OFF,
                cabinLightsState: LightStates.OFF,
                wagonsLightsState: LightStates.OFF
            };
    
            expect(lights(state, setWagonsLightState(LightStates.ON))).toMatchSnapshot();
        });
    });
});
