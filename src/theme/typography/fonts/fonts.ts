/**
 * Imports fonts.
 * Only for CRA.
 * CNA imports them in `_app.tsx`
 */
//import "./fonts.css";

/**
 * Defines the font type.
 */
export type TFont = {
  name: string;
  fontFamily: string;
  fontWeight: string | number;
  fontStyle: string;
  letterSpacing: string;
};

/**
 * Defines the default font.
 * The default font is the browsers default font.
 */
export const font = {
  name: "Default",
  fontFamily: "inherit",
  fontWeight: "normal",
  fontStyle: "normal",
  letterSpacing: "normal",
};
