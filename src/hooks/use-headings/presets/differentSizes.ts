import type { THeadingsSettings } from "../";
import { useFont, useScale } from "../../";

const defaultProps = {
  font: "Default",
  lineHeight: 1,
  scales: [1, 2, 3, 4, 5, 6],
};

/**
 * Returns headings with different sizes.
 */
const differentSizes = (settings: THeadingsSettings): object => {
  const { font, lineHeight, scales } = { ...defaultProps, ...settings };

  const font2 = useFont(font);
  const scales2 =
    scales &&
    scales.map((item) => {
      return { value: item };
    });
  const scales3 = useScale(scales2);
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
