import chroma from "chroma-js";
import { TColor } from "../../theme";
import { useColorContrast } from "./";

/**
 * Defines the two ends of the color spectrum: white and black.
 * They give the highest contrast possible for a color.
 * If the contrast is not enough (AA, AAA) the color has to be changed.
 * No way a better contrast can bie achieved to another color.
 */
type colorSpectrumEndpoints = "white" | "black";

/**
 * Calculates the maximum contrast a color can have.
 */
const useMaximumContrast = (
  color: TColor
): [chroma: TColor, contrast: number, aa: boolean, aaa: boolean] => {
  const white: TColor = { chroma: chroma("white") };
  const [contrastToWhite, aaWhite, aaaWhite] = useColorContrast(color, white);

  const black: TColor = { chroma: chroma("black") };
  const [contrastToBlack, aaBlack, aaaBlack] = useColorContrast(color, black);

  return contrastToWhite < contrastToBlack
    ? [black, contrastToBlack, aaBlack, aaaBlack]
    : [white, contrastToWhite, aaWhite, aaaWhite];
};

export default useMaximumContrast;
