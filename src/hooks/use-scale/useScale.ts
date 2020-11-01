import type {
  TTypographicScaleNames,
  TTypographicScaleSettings,
  TTypographicScaleSettingsForLinear,
  TTypographicScaleSettingsForModular,
} from "../../theme";

import { useTheme } from "../";

/**
 * Returns a value from the linear scale.
 * The returned value is responsive, ie. follows the responsive font-sizes applied to the body.
 * @example linearScaleValue(2, {lineHeight: 1}) => 3 * 1.25 = 3.75em (the value of the 0 scale is 1em)
 */
const linearScaleValue = (
  value: number,
  settings?: TTypographicScaleSettingsForLinear
): number => {
  const theme = useTheme();

  const {
    typography: {
      grid: { lineHeight: lineHeightFromTheme },
    },
  } = theme;

  const lineHeightFromSettings = settings
    ? settings.lineHeight
    : lineHeightFromTheme;

  const newLineHeight = lineHeightFromTheme / lineHeightFromSettings;

  return (value + 1) * newLineHeight;
};

/**
 * Returns a value from the modular scale.
 */
const modularScaleValue = (
  value: number,
  settings?: TTypographicScaleSettingsForModular
): number => {};

/**
 * Returns a value from a scale.
 */
const scaleValue = (
  value: number,
  preset?: TTypographicScaleNames,
  settings?: TTypographicScaleSettings
): number => {
  switch (preset) {
    case "linear":
      return linearScaleValue(value, settings);
    case "modular":
      return modularScaleValue(value, settings);
  }
};

/**
 * Resizes the font to a value on a scale.
 */
const useScale = (
  value: number,
  preset?: TTypographicScaleNames,
  settings?: TTypographicScaleSettings
): object => {
  return { fontSize: `${scaleValue(value, preset, settings)}em` };
};

export default useScale;
