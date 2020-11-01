import { useTheme } from "../../";

/**
 * Defines the settings for the modular scale.
 * These settings are required to scale elements.
 */
export type TModularScaleSettings = {
  base?: number[];
  ratio?: number;
};

/**
 * Returns a value from the modular scale.
 */
const modularScaleValue = (
  value: number,
  settings?: TModularScaleSettings
): number => {};

export default modularScaleValue;
