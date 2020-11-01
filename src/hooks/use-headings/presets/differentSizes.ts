import type { THeadingsSettings } from "../";
import { useFont, useScale } from "../../";

/**
 * Returns headings with the same size.
 */
const differentSizes = (settings: THeadingsSettings): object => {
  const { font, lineHeight, scale } = settings;

  const font2 = useFont(font);
  const scale2 = useScale({ value: scale });

  return {
    ["& h1, h2, h3, h4, h5, h6"]: {
      ...font2,
      ...scale2,
      lineHeight: lineHeight,
    },
  };
};

export default differentSizes;
