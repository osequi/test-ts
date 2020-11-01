import type { TFont, TFontNames } from "../../theme";
import { typography } from "../../theme";

/**
 * Returns a font style object identified by name.
 */
const getFont = (name: TFontNames, fonts: TFont[]): TFont => {
  const { name: fontName, ...rest } = fonts.find((item) => item.name === name);

  /**
   * The font for these elements has to be set explicitely.
   * Otherwise they'll use the browser default font which is monospace.
   */
  const updateBrowserDefaults = {
    ["& input, pre, code, kbd, samp"]: {
      ...rest,
    },
  };

  return { ...rest, ...updateBrowserDefaults };
};

/**
 * Returns font style objects identified by names.
 * @example useFont('Default') => { fontFamily: "inherit", fontWeight: 'inherit', fontStyle: "inherit"}
 * @example useFont(['Default']) => [{ fontFamily: "inherit", fontWeight: 'inherit', fontStyle: "inherit"}]
 * @example useFont(["Deafult", 'Nimbus Sans Medium']) => [{ fontFamily: "inherit", fontWeight: 'inherit', fontStyle: "inherit"}, { fontFamily: "nimbus-sans", fontWeight: 500, fontStyle: "normal"}]
 */
const useFont = (names: TFontNames[] | TFontNames): TFont[] | TFont => {
  // NOTE: Types during destructuring can lost. This is a known bug.
  // @see https://stackoverflow.com/questions/39672807/types-in-object-destructuring
  const { fonts } = typography;

  return Array.isArray(names)
    ? names &&
        names.reduce((result, name) => {
          return [...result, getFont(name, fonts)];
        }, [])
    : getFont(names, fonts);
};

export default useFont;
