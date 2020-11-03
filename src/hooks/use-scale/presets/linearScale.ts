import { typography } from "../../../theme";

/**
 * Defines the settings for the linear scale.
 * These settings are required to scale elements.
 */
export type TLinearScaleSettings = {
  lineHeight?: number;
};

/**
 * Returns a value from the linear scale.
 * The returned value is responsive, ie. follows the responsive font-sizes applied to the body.
 * @example linearScaleValue(2, {lineHeight: 1}) => 3 * 1.25 = 3.75em (the value of the 0 scale is 1em)
 */
const linearScaleValue = (
  value: number,
  settings?: TLinearScaleSettings
): number => {
  const {
    grid: { lineHeight: lineHeightFromTheme },
  } = typography;

  const lineHeightFromSettings = settings
    ? settings.lineHeight
    : lineHeightFromTheme;

  const newLineHeight = lineHeightFromTheme / lineHeightFromSettings;

  return (value + 1) * newLineHeight;
};

export default linearScaleValue;
