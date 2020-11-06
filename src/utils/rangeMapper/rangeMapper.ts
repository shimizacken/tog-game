// from :https://www.npmjs.com/package/range-mapper

/**
 * Creates a function for translating a value with a given input-range
 * into the corresponding value for the output-range using linear
 * interpolation.
 *
 * @param {Number} inStart start of the input-range
 * @param {Number} inEnd end of the inputRange
 * @param {Number} outStart start of the output-range
 * @param {Number} outEnd start of the input-range
 * @returns {function(Number): Number} the mapping-function
 */
export const rangeMapper = (
  inStart: number,
  inEnd: number,
  outStart: number,
  outEnd: number
) => (x: number) =>
  ((x - inStart) * (outEnd - outStart)) / (inEnd - inStart) + outStart;

/**
 * Clamped version of {@see #rangeMapper()}. Will limit output-values to the
 * specified output-range if the intermediate value returned by the
 * mapping-function exceeds that range.
 *
 * @param {Number} inStart start of the input-range
 * @param {Number} inEnd end of the inputRange
 * @param {Number} outStart start of the output-range
 * @param {Number} outEnd start of the input-range
 * @returns {function(Number): Number} the mapping-function
 */
function clampedRangeMapper(
  inStart: number,
  inEnd: number,
  outStart: number,
  outEnd: number
) {
  const mapper = rangeMapper(inStart, inEnd, outStart, outEnd);
  const min = Math.min(outStart, outEnd);
  const max = Math.max(outStart, outEnd);

  return function (x: number) {
    return Math.max(min, Math.min(max, mapper(x)));
  };
}

export { clampedRangeMapper as clamped };
