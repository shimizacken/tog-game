import { setFrontLightState } from "../actions";
import { LightStates } from "../../bl/enums";

describe('lights actions tests', () => {
  
    it('should turn setFrontLightState on', () => {
        
        const frontLightsState = LightStates.ON

        expect(setFrontLightState(frontLightsState)).toMatchSnapshot();
    });

    it('should turn setFrontLightState off', () => {
        
        const frontLightsState = LightStates.OFF

        expect(setFrontLightState(frontLightsState)).toMatchSnapshot();
    });
});
