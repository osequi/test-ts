/**
 * Imports other components and hooks.
 */
import { colors } from "./colors";
import { breakpoints } from "./breakpoints";

/**
 * Defines the CSS writing styles.
 * String is the default CSS syntax.
 * Object is the object notation.
 * @see https://emotion.sh/docs/object-styles
 */
export type TCssNotation = "string" | "object";

/**
 * Defines the theme.
 */
const theme = {
  colors: colors,
  breakpoints: breakpoints,
};

export default theme;
