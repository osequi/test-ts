import type { TFontNames, TScale } from "../../../theme";
import { typography } from "../../../theme";
import { useFont, useScale } from "../../";

export type THeadingsDifferentSizes = {
  font: TFontNames;
  lineHeight: number;
  scale: TScale;
  scaleValues: number[];
};

const defaultProps = {
  font: "Default",
  lineHeight: 1,
  scale: typography.scale,
  scaleValues: [1, 2, 3, 4, 5, 6],
};

/**
 * Returns headings with different sizes.
 */
const differentSizes = (sizes: THeadingsDifferentSizes): object => {
  const { font, lineHeight, scale, scaleValues } = {
    ...defaultProps,
    ...sizes,
  };

  const font2 = useFont(font);

  const { preset, settings } = scale;

  const scalesValues2 =
    scaleValues &&
    scaleValues.map((item) => {
      return { value: item };
    });

  const scales3 = useScale(scalesValues2);

  console.log("scales3:", scales3);

  return {
    ["& h1, h2, h3, h4, h5, h6"]: {
      ...font2,
      lineHeight: lineHeight,
    },
    ["& h6"]: {
      ...scales3[0],
    },
    ["& h5"]: {
      ...scales3[1],
    },
    ["& h4"]: {
      ...scales3[2],
    },
    ["& h3"]: {
      ...scales3[3],
    },
    ["& h2"]: {
      ...scales3[4],
    },
    ["& h1"]: {
      ...scales3[5],
    },
  };
};

export default differentSizes;
