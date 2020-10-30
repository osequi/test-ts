/**
 * Defines the available scales.
 */
export type TTypographicScales = "linear" | "modular";

/**
 * Defines the typographic scale type.
 */
export type TTypographicScale = {
  preset: TTypographicScales;
};

/**
 * Defines the default typographic scale.
 */
export const typographicScale = {
  preset: "linear",
};
