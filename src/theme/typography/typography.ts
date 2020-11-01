import type { TTypographicGrid, TFont } from "./";
import type { TScale } from "../../hooks/use-scale";
import { defaultFont } from "./";

/**
 * Defines the typography type.
 */
export type TTypography = {
  grid: TTypographicGrid;
  fonts: TFont[];
  scale?: TScale;
};

/**
 * Defines the default typography settings.
 */
export const typography = {
  grid: { fontSizes: [100, 100, 110, 120, 140], lineHeight: 1.25 },
  fonts: [
    defaultFont,
    {
      name: "Nimbus Sans Light",
      fontFamily: "nimbus-sans",
      fontWeight: 300,
      fontStyle: "normal",
      letterSpacing: "1.25px",
    },
    {
      name: "Nimbus Sans Regular",
      fontFamily: "nimbus-sans",
      fontWeight: 400,
      fontStyle: "normal",
      letterSpacing: "1.25px",
    },
    {
      name: "Nimbus Sans Medium",
      fontFamily: "nimbus-sans",
      fontWeight: 500,
      fontStyle: "normal",
      letterSpacing: "1.25px",
    },
    {
      name: "Nimbus Sans Black",
      fontFamily: "nimbus-sans",
      fontWeight: 600,
      fontStyle: "normal",
      letterSpacing: "1.25px",
    },
  ],
  scale: {
    preset: "modular",
    settings: {
      base: [1],
      ratio: 1.25,
    },
  },
};
