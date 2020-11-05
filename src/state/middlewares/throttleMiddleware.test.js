import { createFakedMiddleware } from "../../../__mocks__/middleware/createFakedMiddleware";
import throttleMiddleware from "../middlewares/throttleMiddleware";
import { setThrottleSpeed } from "../../features/driveDashboard/state/actions";

jest.useFakeTimers();

describe("driveDashboardMiddleware test suite", () => {
  const testNextFunction = (next, action) => {
    expect(next).toHaveBeenCalledWith(action);
    expect(next).toHaveBeenCalledTimes(1);
  };

  describe("default next call", () => {
    it("should passes through non-function action", () => {
      const { next, invoke } = createFakedMiddleware(throttleMiddleware);
      const action = { type: "@@test-type" };

      invoke(action);

      testNextFunction(next, action);
    });
  });

  describe("SET_THROTTLE_SPEED test suite", () => {
    it("should call next with setThrottleSpeed action after timeout", () => {
      const { next, invoke } = createFakedMiddleware(throttleMiddleware);
      const action = setThrottleSpeed(50);

      invoke(action);

      expect(next).not.toBeCalled();
      jest.runAllTimers();

      expect(next).toBeCalled();
      expect(next).toHaveBeenCalledTimes(1);

      invoke(action);

      expect(next).toBeCalled();
      expect(next).toHaveBeenCalledTimes(1);
    });
  });
});
