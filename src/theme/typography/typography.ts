import type { TTypographicGrid, TTypographicScale, TFont } from "./";
import { typographicGrid, typographicScale, font } from "./";

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
  grid: typographicGrid,
  scale: typographicScale,
  fonts: [font],
};
