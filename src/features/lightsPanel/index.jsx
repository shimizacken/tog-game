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

const getButton = () => (text, onClick) => <Button className={styles.button} text={text} onClick={onClick} />;

const LightsPanelContainer = (
    {toggleFrontLights,
    toggleBackLights,
    toggleCabinLights,
    toggleWagonsLights}) => 
    <Panel>
        {getButton('Front', toggleFrontLights)}
        {getButton('Back', toggleBackLights)}
        {getButton('Cabin', toggleCabinLights)}
        {getButton('Wagons', toggleWagonsLights)}
    </Panel>;

const mapStateToProps = state => ({
    lights: state.lights
});

const mapDispatchToProps = ({
    toggleFrontLights: setFrontLightState,
    toggleBackLights: setBackLightState,
    toggleCabinLights: setCabinLightState,
    toggleWagonsLights: setWagonsLightState
});

export default connect(mapStateToProps, mapDispatchToProps)(LightsPanelContainer);