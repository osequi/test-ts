import type { TFont, TFontNames } from "../../theme";
import { typography } from "../../theme";

/**
 * Returns an array of font style objects identified by name.
 * @example useFonts(["Deafult", 'Nimbus Sans Medium']) => [{ fontFamily: "inherit", fontWeight: 'inherit', fontStyle: "inherit"}, { fontFamily: "nimbus-sans", fontWeight: 500, fontStyle: "normal"}]
 */
const useFonts = (names: TFontNames[]): TFont[] => {
  const { fonts } = typography;

  return (
    names &&
    names.reduce((result, name) => {
      const { name: fontName, ...rest } = fonts.find(
        (item) => item.name === name
      );

      /**
       * The font for these elements has to be set explicitely.
       * Otherwise they'll use the browser default font which is monospace.
       */
      const updateBrowserDefaults = {
        ["& input, pre, code, kbd, samp"]: {
          ...rest,
        },
      };

      return [...result, { ...rest, ...updateBrowserDefaults }];
    }, [])
  );
};

export default useFonts;
