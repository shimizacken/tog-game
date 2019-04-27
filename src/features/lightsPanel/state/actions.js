import { SET_FRONT_LIGHT_STATE, SET_BACK_LIGHT_STATE, SET_CABIN_LIGHT_STATE, SET_WAGON_LIGHT_STATE } from "./constants";

export const setFrontLightState = frontLightsState => ({
  type: SET_FRONT_LIGHT_STATE,
  frontLightsState
});

export const setBackLightState = backLightsState => ({
    type: SET_BACK_LIGHT_STATE,
    backLightsState
});

export const setCabinLightState = cabinLights => ({
    type: SET_CABIN_LIGHT_STATE,
    cabinLights
});

export const setWagonsLightState = wagonsLights => ({
    type: SET_WAGON_LIGHT_STATE,
    wagonsLights
});
