import chroma from "chroma-js";
import { useColorValue } from "./";
import { TColor } from "../../theme";

/**
 * Calculates the contrast of two colors using chroma.js.
 * @param color1
 * @param color2
 */
const useColorContrast = (
  color1: TColor,
  color2: TColor
): [contrast: number, aa: boolean, aaa: boolean] => {
  const { chroma: chroma1 } = color1;
  const { chroma: chroma2 } = color2;

  const contrast = useColorValue(chroma.contrast(chroma1, chroma2), 2);
  const aa = contrast > 4.1;
  const aaa = contrast > 7;

  return [contrast, aa, aaa];
};

export default useColorContrast;
