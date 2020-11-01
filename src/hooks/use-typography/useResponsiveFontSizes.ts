import type { TCssNotation } from "../../theme";
import { typography, breakpoints } from "../../theme";
import { useBreakpoint } from "../";

/**
 * Creates the media queries for the responsive font sizes.
 */
const useResponsiveFontSizes = (notation: TCssNotation): string | object => {
  const { grid } = typography;
  const { fontSizes } = grid;

  const fontSizesWithoutTheDefaultFontSize = fontSizes.slice(1);

  switch (notation) {
    case "string":
      return (
        fontSizesWithoutTheDefaultFontSize &&
        fontSizesWithoutTheDefaultFontSize.reduce((result, item, index) => {
          const breakpoint = breakpoints[index];
          const query = useBreakpoint(breakpoint.name);
          return `${result} ${query} {body {font-size: ${item}%;}}`;
        }, "")
      );
    case "object":
      let responsiveSizes = [];
      return (
        fontSizesWithoutTheDefaultFontSize &&
        fontSizesWithoutTheDefaultFontSize.map((item, index) => {
          const breakpoint = breakpoints[index];
          const query = useBreakpoint(breakpoint.name);
          responsiveSizes[`${query}`] = { fontSize: `${item}%` };
        })
      );
  }
};

export default useResponsiveFontSizes;
