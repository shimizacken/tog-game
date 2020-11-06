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
import { RootState } from "../../state/store";

export const LightsPanelContainer: React.FC = () => {
  const dispatch = useDispatch();
  const frontLightsState = useSelector(
    (state: RootState) => state.lights.frontLightsState
  );
  const backLightsState = useSelector(
    (state: RootState) => state.lights.backLightsState
  );
  const cabinLightsState = useSelector(
    (state: RootState) => state.lights.cabinLightsState
  );
  const wagonsLightsState = useSelector(
    (state: RootState) => state.lights.wagonsLightsState
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
