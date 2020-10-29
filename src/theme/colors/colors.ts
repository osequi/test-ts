import { ColorSpaces, ColorSpaceNames } from "./colorSpaces";

/**
 * The list of the available color names.
 * This theme uses only these colors to form a palette.
 */
enum ColorNames {
  Background,
  Text,
  Highlight,
  Shade,
}

/**
 * The definition of Color.
 */
interface Color {
  name: ColorNames;
  description?: string;
  value: string;
  space: typeof ColorSpaces;
  chroma: any;
}

/**
 * The list of available colors.
 */
const colors: Color[] = [
  {
    name: ColorNames.Background,
    description: "The background color",
    value: "white",
    space: ColorSpaces.find((item) => item.name === ColorSpaceNames.Name),
  },
];

export { colors };
