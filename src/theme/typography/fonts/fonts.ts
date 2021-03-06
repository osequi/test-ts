/**
 * Defines the available font names.
 */
export type TFontNames =
  | "Default"
  | "Nimbus Sans Regular"
  | "Nimbus Sans Medium";

/**
 * Defines the font type.
 */
export type TFont = {
  name?: TFontNames;
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
