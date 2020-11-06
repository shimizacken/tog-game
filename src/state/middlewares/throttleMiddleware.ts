import { Middleware } from "redux";

const throttled: Record<string, boolean> = {};

export const throttleMiddleware: Middleware = () => (next) => (action) => {
  const time = action.meta && action.meta.throttle;

  if (!time) {
    return next(action);
  }

  if (throttled[action.type]) {
    return;
  }

  throttled[action.type] = true;

  setTimeout(() => {
    throttled[action.type] = false;
    next(action);
  }, time);
};
