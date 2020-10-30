import type { TFont } from "../../theme";

/**
 * Returns a font style object identified by name.
 * @example font('Nimbus Sans Medium') => { fontFamily: "nimbus-sans", fontWeight: 500, fontStyle: "normal"}
 */
const useFont = (name: string, fonts: TFont[]): object => {
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

export default useFont;
