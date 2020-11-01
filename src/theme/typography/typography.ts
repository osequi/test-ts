import type { TTypographicGrid, TTypographicScale, TFont } from "./";
import { defaultFont } from "./";

/**
 * Defines the typography type.
 */
export type TTypography = {
  grid: TTypographicGrid;
  scale: TTypographicScale;
  fonts: TFont[];
};

/**
 * Defines the default typography settings.
 */
export const typography = {
  grid: { fontSizes: [100, 100, 110, 120, 140], lineHeight: 1.25 },
  scale: { preset: "linear" },
  fonts: [defaultFont],
};
