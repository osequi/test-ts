/**
 * Defines the available scales.
 */
export type TTypographicScaleNames = "linear" | "modular";

/**
 * Defines the settings for the linear scale.
 * These settings are required to scale elements.
 */
export type TTypographicScaleSettingsForLinear = {
  lineHeight?: number;
};

/**
 * Defines the settings for the modular scale.
 * These settings are required to scale elements.
 */
export type TTypographicScaleSettingsForModular = {
  base?: number[];
  ratio?: number;
};

/**
 * Defines the available scale settings.
 */
export type TTypographicScaleSettings =
  | TTypographicScaleSettingsForLinear
  | TTypographicScaleSettingsForModular;

/**
 * Defines the typographic scale type.
 */
export type TTypographicScale = {
  preset: TTypographicScaleNames;
  settings?: TTypographicScaleSettings;
};

/**
 * Defines the default typographic scale.
 */
export const typographicScale = {
  preset: "linear",
  settings: { lineHeight: 1 },
};
