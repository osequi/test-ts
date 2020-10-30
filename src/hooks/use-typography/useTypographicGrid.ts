import type { TTypographicGrid } from "../../theme";
import { useLem } from "./";

export type TResponseTypes = "css" | "jss";

const useTypographicGrid = (
  grid: TTypographicGrid,
  responseType: TResponseTypes
): string | object => {
  const { fontSizes, lineHeight } = grid;
  const fontSize = fontSizes[0];
  const lem = useLem(grid);

  const css = `
  	body {
	  font-size: ${fontSize}%;
	  line-height: ${lineHeight};
	  --lem: ${lem}em;
	}
  `;

  const jss = {
    body: {
      fontSize: `${fontSize}%`,
      lineHeight: lineHeight,
      "--lem": `${lem}em`,
    },
  };

  switch (responseType) {
    case "css":
      return css;
    case "jss":
      return jss;
  }
};

export default useTypographicGrid;
