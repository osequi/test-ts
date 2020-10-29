import chroma from "chroma-js";
import { TColor } from "../../theme";
import { useColorContrast } from "./";

/**
 * Calculates the maximum contrast a color can have.
 * The maximum contrast is the contrast to the farest end of the spectrum: either to white or to black.
 * If the contrast is not enough (AA, AAA) the color can't be used for typography. It has to be changed.
 * No way a better contrast can be achieved to another color than to white or black.
 */
const useMaximumContrast = (
  color: TColor
): [chroma: TColor, contrast: number, aa: boolean, aaa: boolean] => {
  const white: TColor = { chroma: chroma("white"), name: "White" };
  const [contrastToWhite, aaWhite, aaaWhite] = useColorContrast(color, white);

  const black: TColor = { chroma: chroma("black"), name: "Black" };
  const [contrastToBlack, aaBlack, aaaBlack] = useColorContrast(color, black);

  return contrastToWhite < contrastToBlack
    ? [black, contrastToBlack, aaBlack, aaaBlack]
    : [white, contrastToWhite, aaWhite, aaaWhite];
};

export default useMaximumContrast;
