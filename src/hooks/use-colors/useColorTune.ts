import chroma from "chroma-js";
import { TColor } from "../../theme";
import { useColorValue, useColorContrast } from "./";

/**
 * Reduces / increases a color's luminance until meets a contrast > 7.
 * It's a recursive function.
 */
const tuneColor = (
  chroma1: chroma.Color,
  color2: TColor,
  luminance: number,
  modifier: number,
  index: number
): chroma.Color => {
  const newChroma = chroma1.luminance(luminance + 0.01 * modifier * index);
  const newColor: TColor = { chroma: newChroma };
  const [contrast] = useColorContrast(newColor, color2);

  if (contrast >= 7) {
    return newChroma;
  } else {
    return tuneColor(chroma1, color2, luminance, modifier, index + 1);
  }
};

/**
 * Tunes a color to reach AAA contrast relative to another color.
 */
const useColorTune = (color1: TColor, color2: TColor): chroma.Color => {
  const { chroma: chroma1 } = color1;

  const luminance = useColorValue(chroma1.luminance(), 2);
  const lightness = useColorValue(chroma1.get("hsl.l") * 100, 2);

  // Reduce or increase luminance?
  const modifier = lightness < 50 ? -1 : 1;

  return tuneColor(chroma1, color2, luminance, modifier, 1);
};

export default useColorTune;
