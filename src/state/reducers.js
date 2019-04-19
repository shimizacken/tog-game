import { combineReducers } from 'redux';
import { driveDashboard } from '../features/driveDashboard/state/reducers';
import { controlCenterDisplay } from '../features/controlCenterDisplay/state/reducers';

const reducers = combineReducers({
    driveDashboard,
    controlCenterDisplay
});

export default reducers;
