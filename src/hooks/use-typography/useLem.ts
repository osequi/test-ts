import { typography } from "../../theme";

/**
 * Calculates the basic spacing unit, the grid size, in `em`
 * @example {fontSize: 100%, lineHeight: 1.25} => (100 * 1.25) / 100 = 1.25
 * @example {fontSize: 110%, lineHeight: 1.25} => (110 * 1.25) / 100 = 1.375
 */
const useLem = (): number => {
  const { grid } = typography;
  const { fontSizes, lineHeight } = grid;
  const fontSize = fontSizes[0];

  return (fontSize * lineHeight) / 100;
};

export default useLem;
