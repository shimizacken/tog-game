import { SET_FRONT_LIGHT_STATE, SET_BACK_LIGHT_STATE, SET_CABIN_LIGHT_STATE, SET_WAGON_LIGHT_STATE } from "./constants";

export const setFrontLightState = frontLightsState => ({
  type: SET_FRONT_LIGHT_STATE,
  frontLightsState
});

export const setBackLightState = backLightsState => ({
    type: SET_BACK_LIGHT_STATE,
    backLightsState
});

export const setCabinLightState = cabinLightsState => ({
    type: SET_CABIN_LIGHT_STATE,
    cabinLightsState
});

export const setWagonsLightState = wagonsLightsState => ({
    type: SET_WAGON_LIGHT_STATE,
    wagonsLightsState
});
