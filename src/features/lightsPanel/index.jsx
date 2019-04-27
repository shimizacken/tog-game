import React from 'react';
import { connect } from 'react-redux';

const LightsPanelContainer = ({lights}) => <div>{lights.frontLightsState}</div>;

const mapStateToProps = state => ({
    lights: state.lights
});

export default connect(mapStateToProps)(LightsPanelContainer);