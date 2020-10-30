/**
 * Defines the typographic grid type.
 */
export type TTypographicGrid = {
  fontSizes: number[];
  lineHeight: number;
};

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
