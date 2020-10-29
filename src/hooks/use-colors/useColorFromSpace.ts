import chroma from "chroma-js";
import { lowerCase } from "lodash";
import { TColor } from "../../theme";

const createColorFromTriplets = (color: TColor): chroma.Color | null => {
  if (!color || !color.value || !color.spaceName) return null;

  const { value, spaceName } = color;

  /**
   * '255, 255, 1' => '255,255,1'
   */
  const removedWhiteSpace = value.split(" ").join("");
  const parts = removedWhiteSpace.split(",");
  if (parts.length !== spaceName.length) return null;

  /**
   * (255, 255, 1, 'RGB') => {r:255, g:255, b: 1}
   */
  let params = [];
  parts.map((item, index) => {
    params[lowerCase(spaceName[index])] = item;
  });

  return chroma({ ...params });
};

/**
 * Creates a color object using chroma.js
 */
const useColorFromSpace = (color: TColor): chroma.Color | null => {
  if (!color || !color.value || !color.spaceName) return null;

  const { value, spaceName } = color;

  switch (spaceName) {
    case "Name":
    case "Hexadecimal":
      return chroma.valid(value) ? chroma(value) : null;
    case "Number":
      return chroma(parseInt(value));
    case "Temperature":
      chroma.temperature(parseInt(value));
    default:
      return createColorFromTriplets(color);
  }
};

export default useColorFromSpace;
