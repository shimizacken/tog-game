import {
  setFrontLightState,
  setBackLightState,
  setCabinLightState,
  setWagonsLightState,
} from "../actions";

describe("lights actions test suite", () => {
  it("should return setFrontLightState action", () => {
    expect(setFrontLightState).toMatchSnapshot();
  });

  it("should return setBackLightState", () => {
    expect(setBackLightState).toMatchSnapshot();
  });

  it("should return setCabinLightState action", () => {
    expect(setCabinLightState).toMatchSnapshot();
  });

  it("should return setWagonsLightState action", () => {
    expect(setWagonsLightState).toMatchSnapshot();
  });
});
