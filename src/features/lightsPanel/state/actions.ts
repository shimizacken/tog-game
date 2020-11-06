import {
  SET_FRONT_LIGHT_STATE,
  SET_BACK_LIGHT_STATE,
  SET_CABIN_LIGHT_STATE,
  SET_WAGON_LIGHT_STATE,
} from "./constants";

export const setFrontLightState = {
  type: SET_FRONT_LIGHT_STATE,
};

export const setBackLightState = {
  type: SET_BACK_LIGHT_STATE,
};

export const setCabinLightState = {
  type: SET_CABIN_LIGHT_STATE,
};

export const setWagonsLightState = {
  type: SET_WAGON_LIGHT_STATE,
};
