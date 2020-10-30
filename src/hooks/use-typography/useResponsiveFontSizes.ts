import type { TTypographicGrid, TCssNotation, TBreakpoint } from "../../theme";
import { useBreakpoint } from "../";

/**
 * Creates the media queries for the responsive font sizes.
 */
const useResponsiveFontSizes = (
  grid: TTypographicGrid,
  breakpoints: TBreakpoint[],
  notation: TCssNotation
): string | object => {
  const { fontSizes } = grid;

  switch (notation) {
    case "string":
      return (
        fontSizes &&
        fontSizes.reduce((result, item, index) => {
          const breakpoint = breakpoints[index];
          const query = useBreakpoint(breakpoint.name, breakpoints);
          return `${result} ${query} {body {font-size: ${item}%;}}`;
        }, "")
      );
    case "object":
      let responsiveSizes = [];
      return (
        fontSizes &&
        fontSizes.map((item, index) => {
          const breakpoint = breakpoints[index];
          const query = useBreakpoint(breakpoint.name, breakpoints);
          responsiveSizes[`${query}`] = { fontSize: `${item}%` };
        })
      );
  }
};

export default useResponsiveFontSizes;
