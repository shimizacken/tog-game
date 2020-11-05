import {
  SET_FRONT_LIGHT_STATE,
  SET_BACK_LIGHT_STATE,
  SET_CABIN_LIGHT_STATE,
  SET_WAGON_LIGHT_STATE,
} from "./constants";

const lightsInitialState = {
  frontLightsState: false,
  backLightsState: false,
  cabinLightsState: false,
  wagonsLightsState: false,
};

export const lights = (state = lightsInitialState, action) => {
  if (action.type === SET_FRONT_LIGHT_STATE) {
    return {
      ...state,
      frontLightsState: !state.frontLightsState,
    };
  }

  if (action.type === SET_BACK_LIGHT_STATE) {
    return {
      ...state,
      backLightsState: !state.backLightsState,
    };
  }

  if (action.type === SET_CABIN_LIGHT_STATE) {
    return {
      ...state,
      cabinLightsState: !state.cabinLightsState,
    };
  }

  if (action.type === SET_WAGON_LIGHT_STATE) {
    return {
      ...state,
      wagonsLightsState: !state.wagonsLightsState,
    };
  }

  return state;
};
