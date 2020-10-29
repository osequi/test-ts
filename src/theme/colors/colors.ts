import chroma from "chroma-js";
import { TColorSpaceNames } from "./colorSpaces";

/**
 * The list of the available color names.
 * This theme uses only these colors to form a palette.
 */
export enum TColorNames {
  Background,
  Text,
  Highlight,
  Shade,
}

/**
 * The definition of Color.
 */
export type TColor = {
  name: TColorNames;
  description?: string;
  value: string | null;
  space: TColorSpaceNames;
  chroma: chroma.Color | null;
};

/**
 * The list of available colors.
 */
export const colors: TColor[] = [
  {
    name: TColorNames.Background,
    description: "The background color.",
    value: "white",
    space: TColorSpaceNames.Name,
    chroma: null,
  },
  {
    name: TColorNames.Text,
    description: "The text color.",
    value: "black",
    space: TColorSpaceNames.Name,
    chroma: null,
  },
  {
    name: TColorNames.Highlight,
    description:
      "The highlight color. Used for links, buttons, call to action elements.",
    value: null,
    space: TColorSpaceNames.Name,
    chroma: null,
  },
  {
    name: TColorNames.Shade,
    description: "The shade color. Used for secondary backgrounds.",
    value: null,
    space: TColorSpaceNames.Name,
    chroma: null,
  },
];
