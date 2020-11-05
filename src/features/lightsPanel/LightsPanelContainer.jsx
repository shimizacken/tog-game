import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Panel } from "../../components/panel/Panel";
import { LightButton } from "./components/lightButton/LightButton";
import {
  setFrontLightState,
  setBackLightState,
  setCabinLightState,
  setWagonsLightState,
} from "./state/actions";
import styles from "./LightsPanelContainer.module.scss";

export const LightsPanelContainer = () => {
  const dispatch = useDispatch();
  const frontLightsState = useSelector(
    (state) => state.lights.frontLightsState
  );
  const backLightsState = useSelector((state) => state.lights.backLightsState);
  const cabinLightsState = useSelector(
    (state) => state.lights.cabinLightsState
  );
  const wagonsLightsState = useSelector(
    (state) => state.lights.wagonsLightsState
  );

  return (
    <Panel classNameInnerWrapper={styles.buttons} width={"200"} height={"200"}>
      <LightButton
        enabled={frontLightsState}
        text={"Front"}
        onClick={() => dispatch(setFrontLightState)}
      />
      <LightButton
        enabled={backLightsState}
        text={"Back"}
        onClick={() => dispatch(setBackLightState)}
      />
      <LightButton
        enabled={cabinLightsState}
        text={"Cabin"}
        onClick={() => dispatch(setCabinLightState)}
      />
      <LightButton
        enabled={wagonsLightsState}
        text={"Wagons"}
        onClick={() => dispatch(setWagonsLightState)}
      />
    </Panel>
  );
};
