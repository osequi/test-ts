/**
 * Returns a number with decimals.
 * @param number
 * @param decimals
 */
const useColorValue = (number: number, decimals: number): number => {
  return Number(number.toFixed(decimals));
};

export default useColorValue;
