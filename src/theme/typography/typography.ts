import type { TTypographicGrid } from "./";

/**
 * Defines the available scales.
 */
export type TTypographicScales = "linear" | "modular";

/**
 * Defines the typographic scale.
 */
export type TTypographicScale = {
  preset: TTypographicScales;
};

/**
 * Defines the typography.
 */
export type TTypography = {
  grid: TTypographicGrid;
  scale: TTypographicScale;
};
