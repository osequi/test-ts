/**
 * Returns a number with decimals.
 * @param number
 * @param decimals
 */
const colorValueToDecimal = (number: number, decimals: number): number => {
  return Number(number.toFixed(decimals));
};

/**
 * Returns a number with decimals, the hook version.
 * @param number
 * @param decimals
 */
const useColorValue = (number: number, decimals: number): number => {
  return colorValueToDecimal(number, decimals);
};

export { colorValueToDecimal, useColorValue };
