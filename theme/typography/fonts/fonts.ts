/**
 * Imports fonts.
 * Only for CRA.
 * CNA imports them in `_app.tsx`
 */
//import "./fonts.css";

/**
 * Defines the available font names.
 */
export type TFontNames = "Default";

/**
 * Defines the font type.
 */
export type TFont = {
  name: TFontNames;
  fontFamily: string;
  fontWeight: string | number;
  fontStyle: string;
  letterSpacing: string;
};

/**
 * Defines the default font.
 * The default font is the browsers default font.
 */
export const defaultFont = {
  name: "Default",
  fontFamily: "inherit",
  fontWeight: "normal",
  fontStyle: "normal",
  letterSpacing: "normal",
};
