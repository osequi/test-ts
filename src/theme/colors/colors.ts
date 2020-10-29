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
  space: ColorSpaces;
  chroma: any;
}

const colors = {};

export { colors };
