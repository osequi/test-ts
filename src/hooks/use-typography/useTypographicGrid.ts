import type { TTypographicGrid, TCssNotation, TBreakpoint } from "../../theme";
import { useLem, useResponsiveFontSizes } from "./";

const useTypographicGrid = (
  grid: TTypographicGrid,
  breakpoints: TBreakpoint[],
  notation: TCssNotation
): string | object => {
  const { fontSizes, lineHeight } = grid;
  const fontSize = fontSizes[0];

  const lem = useLem(grid);
  const responsiveFontSizes = useResponsiveFontSizes(
    grid,
    breakpoints,
    notation
  );

  const css = `
  	body {
	  font-size: ${fontSize}%;
	  line-height: ${lineHeight};
	  --lem: ${lem}em;
	}
	${responsiveFontSizes}
  `;

  const jss = {
    fontSize: `${fontSize}%`,
    lineHeight: lineHeight,
    "--lem": `${lem}em`,
    // NOTE: This has to be fixed for CRA
    // ...responsiveFontSizes,
  };

  switch (notation) {
    case "string":
      return css;
    case "object":
      return jss;
  }
};

export default useTypographicGrid;
