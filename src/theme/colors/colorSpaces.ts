/**
 * The list of standard color space names supported by chroma.js
 * @see https://gka.github.io/chroma.js/#chroma
 */
enum Standards {
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
enum ColorSpaceNames {
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
interface ColorSpace {
  name: ColorSpaceNames;
  description?: string;
  example?: string;
  spaceName?: Standards;
}

/**
 * The list of available Color Spaces.
 */
const ColorsSpaces: ColorSpace[] = [
  {
    name: ColorSpaceNames.Name,
    description: "Named colors from the W3CX11 specification.",
    example: "red",
    spaceName: null,
  },
  {
    name: ColorSpaceNames.Hexadecimal,
    description: "The standard CSS color notation.",
    example: "#ff0000",
    spaceName: null,
  },
  {
    name: ColorSpaceNames.Number,
    description: "A value between 0 - 16777215.",
    example: "1",
    spaceName: null,
  },
  {
    name: ColorSpaceNames.RGB,
    description: "An RGB triplet.",
    example: "255, 0, 0",
    spaceName: Standards.RGB,
  },
  {
    name: ColorSpaceNames.HSL,
    description: "An HSL triplet.",
    example: "330, 1, 0.6",
    spaceName: Standards.HSL,
  },
  {
    name: ColorSpaceNames.HSV,
    description: "An HSV triplet.",
    example: "38.82, 1, 1",
    spaceName: Standards.HSV,
  },
  {
    name: ColorSpaceNames.Lab,
    description: "A Lab triplet.",
    example: "74.94, 23.93, 78.95",
    spaceName: Standards.Lab,
  },
  {
    name: ColorSpaceNames.LCH
    description: "An LCH triplet.",
    example: "79.21, 25.94, 235.11",
    spaceName: Standards.LCH,
  },
  {
    name: ColorSpaceNames.HCL,
    description: "An HCL triplet.",
    example: "235.11, 25.94, 79.21",
    spaceName: Standards.HCL,
  },
  {
    name: ColorSpaceNames.CMYK,
    description: "A CMYK quadruplet.",
    example: "1, 0.5, 0, 0.2",
    spaceName: Standards.CMYK,
  },
  {
    name: ColorSpaceNames.GL,
    description: "An RGB triplet with GL notation.",
    example: "0.6, 0, 0.8",
    spaceName: Standards.RGB,
  },
  {
    name: ColorSpaceNames.Temperature,
    description:
      "A single number in Kelvin (K) units. From around 200 to 30,000",
    example: "1000",
    spaceName: null,
  },
];

export { ColorsSpaces };
