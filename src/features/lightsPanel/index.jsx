import React from 'react';
import { connect } from 'react-redux';
import Panel from '../../components/panel';
import { 
    setFrontLightState,
    setBackLightState,
    setCabinLightState,
    setWagonsLightState
} from './state/actions';
import LightButton from './components/lightButton';

const LightsPanelContainer = (
    {
        frontLightsState,
        backLightsState,
        cabinLightsState,
        wagonsLightsState,
        toggleFrontLights,
        toggleBackLights,
        toggleCabinLights,
        toggleWagonsLights
    }) => 
    <Panel>
        <LightButton enabled={frontLightsState} text={'Front'} onClick={toggleFrontLights} />
        <LightButton enabled={backLightsState} text={'Back'} onClick={toggleBackLights} />
        <LightButton enabled={cabinLightsState} text={'Cabin'} onClick={toggleCabinLights} />
        <LightButton enabled={wagonsLightsState} text={'Wagons'} onClick={toggleWagonsLights} />
    </Panel>;

const mapStateToProps = state => ({
    frontLightsState: state.lights.frontLightsState,
    backLightsState: state.lights.backLightsState,
    cabinLightsState: state.lights.cabinLightsState,
    wagonsLightsState: state.lights.wagonsLightsState
});

const mapDispatchToProps = dispatch => ({
    toggleFrontLights: () => dispatch(setFrontLightState),
    toggleBackLights: () => dispatch(setBackLightState),
    toggleCabinLights: () => dispatch(setCabinLightState),
    toggleWagonsLights: () => dispatch(setWagonsLightState)
});

export default connect(mapStateToProps, mapDispatchToProps)(LightsPanelContainer);