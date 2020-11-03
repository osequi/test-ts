import { typography } from "../../theme";

/**
 * Defines the settings for the linear scale.
 * These settings are required to scale typographic elements.
 */
export type TLinearScale = {
  /**
   * The value from the linear scale.
   */
  value: number;
  /**
   * The new line height.
   * When text is scaled the line height is often changed to.
   */
  lineHeight: number;
  /**
   * The line height of the grid.
   * This usualy comes from the theme.
   */
  gridLineHeight?: number;
};

const defaultProps = {
  value: 1,
  lineHeight: 1,
  gridLineHeight: typography.grid.lineHeight,
};

/**
 * Returns a value from the linear scale.
 * The returned value is responsive, ie. follows the responsive font-sizes applied to the body.
 * @example useLinearScale({value: 1, lineHeight: 1}) => 2 * 1.25 = 2.5em (the value of the 0 scale is 1em)
 */
const useLinearScale = (linearScale: TLinearScale): number => {
  const { value, lineHeight, gridLineHeight } = {
    ...defaultProps,
    ...linearScale,
  };

  const newLineHeight = gridLineHeight / lineHeight;

  return (value + 1) * newLineHeight;
};

export default useLinearScale;
