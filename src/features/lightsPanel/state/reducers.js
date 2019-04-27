import { LightStates } from "../bl/enums";
import { SET_FRONT_LIGHT_STATE, SET_BACK_LIGHT_STATE, SET_CABIN_LIGHT_STATE, SET_WAGON_LIGHT_STATE } from "./constants";

const lightsInitialState = {
    frontLightsState: LightStates.OFF,
    backLightsState: LightStates.OFF,
    cabinLightsState: LightStates.OFF,
    wagonsLightsState: LightStates.OFF
};

const lights = (state = lightsInitialState, action) => {

    if (action.type === SET_FRONT_LIGHT_STATE) {
        return {
            ...state,
            frontLightsState: action.frontLightsState
        };
    }

    if (action.type === SET_BACK_LIGHT_STATE) {
        return {
            ...state,
            backLightsState: action.backLightsState
        };
    }

    if (action.type === SET_CABIN_LIGHT_STATE) {
        return {
            ...state,
            cabinLightsState: action.cabinLightsState
        };
    }

    if (action.type === SET_WAGON_LIGHT_STATE) {
        return {
            ...state,
            wagonsLightsState: action.wagonsLightsState
        };
    }

    return state;
};

export { lights };