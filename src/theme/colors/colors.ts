import chroma from "chroma-js";
import { TColorSpaceNames } from "./colorSpaces";

/**
 * The list of color names required to form a palette.
 */
export type TColorNamesForThePalette =
  | "Background"
  | "Text"
  | "Highlight"
  | "Shade";

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
 * The default colors.
 */
export const colors: TColor[] = [
  {
    name: "White",
    for: "Background",
    description: "The background color.",
    value: "white",
    spaceName: "Name",
    chroma: chroma("white"),
  },
  {
    name: "Black",
    for: "Text",
    description: "The text color.",
    value: "black",
    spaceName: "Name",
    chroma: chroma("black"),
  },
  {
    name: "Undefined",
    for: "Highlight",
    description:
      "The highlight color. Used for links, buttons, call to action elements.",
    value: null,
    spaceName: "Name",
    chroma: null,
  },
  {
    name: "Undefined",
    for: "Shade",
    description: "The shade color. Used for secondary backgrounds.",
    value: null,
    spaceName: "Name",
    chroma: null,
  },
];
