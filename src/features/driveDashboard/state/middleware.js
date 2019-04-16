import { SET_THROTTLE_SPEED } from './constants';

const pending = {};

export const driveDashboardMiddleware = ({ dispatch, getState }) => next => action => {

    if (action.type !== SET_THROTTLE_SPEED) {
        
        return next(action);
    }

    if (pending[action.type]) {

        clearTimeout(pending[action.type]);
    }

    pending[action.type] = setTimeout(() => {

        next(action);
    }, 500);
};