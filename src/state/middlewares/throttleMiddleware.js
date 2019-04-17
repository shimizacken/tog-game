import { throttleStart } from "../actions";

const throttled = {};

const throttleMiddleware = ({ dispatch, getState }) => next => action => {

    const time = action.meta && action.meta.throttle;

    if (!time) {
        
        return next(action);
    }

    if (throttled[action.type]) {

        return;
    }

    throttled[action.type] = true;
    dispatch(throttleStart());

    setTimeout(() => {

        throttled[action.type] = false;
        next(action);
    }, time);
};

export default throttleMiddleware;