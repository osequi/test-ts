import { TColorSpaceNames } from "./colorSpaces";

/**
 * The list of the available color names.
 * This theme uses only these colors to form a palette.
 */
export enum ColorNames {
  Background,
  Text,
  Highlight,
  Shade,
}

/**
 * The definition of Color.
 */
export type Color = {
  name: ColorNames;
  description?: string;
  value: string | null;
  space: TColorSpaceNames;
  chroma: object | null;
};

/**
 * The list of available colors.
 */
export const colors: Color[] = [
  {
    name: ColorNames.Background,
    description: "The background color.",
    value: "white",
    space: TColorSpaceNames.Name,
    chroma: null,
  },
  {
    name: ColorNames.Text,
    description: "The text color.",
    value: "black",
    space: TColorSpaceNames.Name,
    chroma: null,
  },
  {
    name: ColorNames.Highlight,
    description:
      "The highlight color. Used for links, buttons, call to action elements.",
    value: null,
    space: TColorSpaceNames.Name,
    chroma: null,
  },
  {
    name: ColorNames.Shade,
    description: "The shade color. Used for secondary backgrounds.",
    value: null,
    space: TColorSpaceNames.Name,
    chroma: null,
  },
];
