import { calculateDrivingButtonState } from "./calculateDrivingButtonState";
import { DrivingButtonStates } from "../enums/drivingButtonStates";

describe("calculateDrivingButtonState test suite", () => {
  describe("default state", () => {
    it("should return default state", () => {
      expect(calculateDrivingButtonState()).toMatchSnapshot();
    });
  });

  describe("rest states", () => {
    it("should return ERROR when ERROR", () => {
      const currentState = DrivingButtonStates.ERROR;

      expect(calculateDrivingButtonState(currentState)).toMatchSnapshot();
    });

    it("should return READY when TURNED_OFF", () => {
      const currentState = DrivingButtonStates.TURNED_OFF;

      expect(calculateDrivingButtonState(currentState)).toMatchSnapshot();
    });

    it("should return DRIVE when READY", () => {
      const currentState = DrivingButtonStates.READY;

      expect(calculateDrivingButtonState(currentState)).toMatchSnapshot();
    });

    it("should return READY when DRIVE", () => {
      const currentState = DrivingButtonStates.DRIVE;

      expect(calculateDrivingButtonState(currentState)).toMatchSnapshot();
    });
  });
});
