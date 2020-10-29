/**
 * The list of standard color space names supported by chroma.js
 * @see https://gka.github.io/chroma.js/#chroma
 */
export enum TStandards {
  RGB,
  HSL,
  HSV,
  Lab,
  LCH,
  HCL,
  CMYK,
}

/**
 * The list of all color space names supported by chroma.js
 * @see https://gka.github.io/chroma.js/#chroma
 */
export enum TColorSpaceNames {
  Name,
  Hexadecimal,
  Number,
  Temperature,
  RGB,
  HSL,
  HSV,
  Lab,
  LCH,
  HCL,
  CMYK,
  GL,
}

/**
 * The definition of the Color Space.
 */
export type TColorSpace = {
  name: TColorSpaceNames;
  description?: string;
  example?: string;
  spaceName?: TStandards;
};

/**
 * The list of available Color Spaces.
 */
export const colorSpaces: TColorSpace[] = [
  {
    name: TColorSpaceNames.Name,
    description: "Named colors from the W3CX11 specification.",
    example: "red",
    spaceName: null,
  },
  {
    name: TColorSpaceNames.Hexadecimal,
    description: "The standard CSS color notation.",
    example: "#ff0000",
    spaceName: null,
  },
  {
    name: TColorSpaceNames.Number,
    description: "A value between 0 - 16777215.",
    example: "1",
    spaceName: null,
  },
  {
    name: TColorSpaceNames.RGB,
    description: "An RGB triplet.",
    example: "255, 0, 0",
    spaceName: TStandards.RGB,
  },
  {
    name: TColorSpaceNames.HSL,
    description: "An HSL triplet.",
    example: "330, 1, 0.6",
    spaceName: TStandards.HSL,
  },
  {
    name: TColorSpaceNames.HSV,
    description: "An HSV triplet.",
    example: "38.82, 1, 1",
    spaceName: TStandards.HSV,
  },
  {
    name: TColorSpaceNames.Lab,
    description: "A Lab triplet.",
    example: "74.94, 23.93, 78.95",
    spaceName: TStandards.Lab,
  },
  {
    name: TColorSpaceNames.LCH,
    description: "An LCH triplet.",
    example: "79.21, 25.94, 235.11",
    spaceName: TStandards.LCH,
  },
  {
    name: TColorSpaceNames.HCL,
    description: "An HCL triplet.",
    example: "235.11, 25.94, 79.21",
    spaceName: TStandards.HCL,
  },
  {
    name: TColorSpaceNames.CMYK,
    description: "A CMYK quadruplet.",
    example: "1, 0.5, 0, 0.2",
    spaceName: TStandards.CMYK,
  },
  {
    name: TColorSpaceNames.GL,
    description: "An RGB triplet with GL notation.",
    example: "0.6, 0, 0.8",
    spaceName: TStandards.RGB,
  },
  {
    name: TColorSpaceNames.Temperature,
    description:
      "A single number in Kelvin (K) units. From around 200 to 30,000",
    example: "1000",
    spaceName: null,
  },
];
