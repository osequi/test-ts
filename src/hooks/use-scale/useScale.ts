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
 * Defines the scale type.
 */
export type TScale = {
  preset?: TScaleNames;
  settings?: TScaleSettings;
};

/**
 * Defines the scale value type.
 */
export type TScaleValue = TScale & {
  value: number;
};

/**
 * Returns a value from a scale.
 */
const scaleValue = (scale: TScaleValue): number => {
  const { value, preset, settings } = scale;

  switch (preset) {
    case "linear":
      return linearScaleValue(value, settings);
    case "modular":
      return modularScaleValue(value, settings);
  }
};

/**
 * Resizes the font to a value on a scale.
 * @example useScale({ value: 1, preset: "modular" }) => {fontSize: ....}
 * @example useScale([{ value: 1, preset: "modular" },{ value: 1, preset: "linear" }]) => [{fontSize: ...}, {fontSize: ...}]
 */
const useScale = (scales?: TScaleValue[] | TScaleValue): object[] | object => {
  return Array.isArray(scales)
    ? scales &&
        scales.reduce((result, scale) => {
          return [...result, { fontSize: `${scaleValue(scale)}em` }];
        }, [])
    : { fontSize: `${scaleValue(scales)}em` };
};

export default useScale;
