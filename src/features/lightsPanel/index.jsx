import React from 'react';
import { connect } from 'react-redux';
import Panel from '../../components/panel';
import Button from '../../components/button';
import { 
    setFrontLightState,
    setBackLightState,
    setCabinLightState,
    setWagonsLightState
} from './state/actions';
import styles from './index.module.scss';

const LightsPanelContainer = (
    {toggleFrontLights,
    toggleBackLights,
    toggleCabinLights,
    toggleWagonsLights}) => 
    <Panel>
        <Button className={styles.button} text={'Front'} onClick={toggleFrontLights} />
        <Button className={styles.button} text={'Back'} onClick={toggleBackLights} />
        <Button className={styles.button} text={'Cabin'} onClick={toggleCabinLights} />
        <Button className={styles.button} text={'Wagons'} onClick={toggleWagonsLights} />
    </Panel>;

const mapStateToProps = state => ({
    lights: state.lights
});

const mapDispatchToProps = dispatch => ({
    toggleFrontLights: () => dispatch(setFrontLightState),
    toggleBackLights: () => dispatch(setBackLightState),
    toggleCabinLights: () => dispatch(setCabinLightState),
    toggleWagonsLights: () => dispatch(setWagonsLightState)
});

export default connect(mapStateToProps, mapDispatchToProps)(LightsPanelContainer);