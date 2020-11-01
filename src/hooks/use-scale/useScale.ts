import type { TLinearScaleSettings, TModularScaleSettings } from "./";
import { linearScaleValue, modularScaleValue } from "./";

/**
 * Defines the available scales.
 */
export type TScaleNames = "linear" | "modular";

/**
 * Defines the available scale settings.
 */
export type TScaleSettings = TLinearScaleSettings & TModularScaleSettings;

/**
 * Returns a value from a scale.
 */
const scaleValue = (
  value: number,
  preset: TScaleNames,
  settings?: TScaleSettings
): number => {
  switch (preset) {
    case "linear":
      return linearScaleValue(value, settings);
    case "modular":
      return modularScaleValue(value, settings);
  }
};

/**
 * Resizes the font to a value on a scale.
 */
const useScale = (
  value: number,
  preset: TScaleNames,
  settings?: TScaleSettings
): object => {
  return { fontSize: `${scaleValue(value, preset, settings)}em` };
};

export default useScale;
