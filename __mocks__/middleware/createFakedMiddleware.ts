import { Action, Middleware } from "redux";

export const createFakedMiddleware = (middleware: Middleware, state = {}) => {
  const store = {
    getState: jest.fn(() => state),
    dispatch: jest.fn(),
  };

  const next = jest.fn();

  const invoke = (action: Action) => middleware(store)(next)(action);

  return { store, next, invoke };
};
