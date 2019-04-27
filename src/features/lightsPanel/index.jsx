import React from 'react';
import { connect } from 'react-redux';
import Panel from '../../components/panel';
import Button from '../../components/button';
import styles from './index.module.scss';

const LightsPanelContainer = ({lights}) => 
    <Panel>
        <Button className={styles.button} />
        <Button className={styles.button} />
        <Button className={styles.button} />
        <Button className={styles.button} />
    </Panel>;

const mapStateToProps = state => ({
    lights: state.lights
});

export default connect(mapStateToProps)(LightsPanelContainer);