import type { TFontNames } from "../../theme";
import { useFonts, useScale } from "../";

export type THeadingsPresetNames = "sameSize" | "differentSizes";

export type THeadingsSettings = {
  font?: TFontNames;
  lineHeight?: number;
  scale?: number;
};

/**
 * Returns headings with the same size.
 */
const sameSizeHeadings = (settings: THeadingsSettings): object => {
  const { font, lineHeight, scale } = settings;

  const [font2] = useFonts([font]);
  const scale2 = useScale();

  return {
    ["& h1, h2, h3, h4, h5, h6"]: {
      ...font2,
      ...scale2,
      lineHeight: lineHeight,
    },
  };
};

/**
 * Returns headings with different sizes.
 */
const differentSizeHeadings = (settings: THeadingsSettings): object => {};

const useHeadings = (
  preset: THeadingsPresetNames,
  settings: THeadingsSettings
): object => {
  switch (preset) {
    case "sameSize":
      return sameSizeHeadings(settings);
    case "differentSizes":
      return differentSizeHeadings(settings);
  }
};

export default useHeadings;
