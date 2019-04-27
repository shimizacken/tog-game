import { LightStates } from "../bl/enums";

const lightsInitialState = {
    frontLightsState: LightStates.ON,
    backLightsState: LightStates.ON,
    cabinLights: LightStates.ON,
    wagonsLights: LightStates.ON
};

const lights = (state = lightsInitialState, action) => {
    return state;
};

export { lights };