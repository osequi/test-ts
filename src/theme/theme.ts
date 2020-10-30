/**
 * Imports other components and hooks.
 */
import { colors, TColor } from "./colors";
import { breakpoints, TBreakpoint } from "./breakpoints";
import { typography, TTypography } from "./typography";

/**
 * Defines the CSS writing styles.
 * String is the default CSS syntax.
 * Object is the object notation.
 * @see https://emotion.sh/docs/object-styles
 */
export type TCssNotation = "string" | "object";

/**
 * Defines the theme shape.
 */
export type TTheme = {
  colors: TColor[];
  breakpoints: TBreakpoint[];
  typography: TTypography;
};

/**
 * Defines the theme.
 */
const theme = {
  colors: colors,
  breakpoints: breakpoints,
  typography: typography,
};

export default theme;
