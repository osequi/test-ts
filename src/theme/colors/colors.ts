import chroma from "chroma-js";
import { TColorSpaceNames } from "./colorSpaces";

/**
 * The list of color names required to form a palette.
 */
export enum TColorNamesForThePalette {
  Background,
  Text,
  Highlight,
  Shade,
}

/**
 * The definition of Color.
 */
export type TColor = {
  name?: string;
  for?: TColorNamesForThePalette;
  description?: string;
  value?: string | null;
  spaceName?: TColorSpaceNames;
  chroma: chroma.Color | null;
};

/**
 * The list of available colors.
 */
export const colors: TColor[] = [
  {
    name: "White",
    for: TColorNamesForThePalette.Background,
    description: "The background color.",
    value: "white",
    spaceName: "Name",
    chroma: null,
  },
  {
    name: "Black",
    for: TColorNamesForThePalette.Text,
    description: "The text color.",
    value: "black",
    spaceName: "Name",
    chroma: null,
  },
  {
    name: "Undefined",
    for: TColorNamesForThePalette.Highlight,
    description:
      "The highlight color. Used for links, buttons, call to action elements.",
    value: null,
    spaceName: "Name",
    chroma: null,
  },
  {
    name: "Undefined",
    for: TColorNamesForThePalette.Shade,
    description: "The shade color. Used for secondary backgrounds.",
    value: null,
    spaceName: "Name",
    chroma: null,
  },
];
