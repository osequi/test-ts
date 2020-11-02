import type { TFontNames } from "../../theme";
import { sameSize, differentSizes } from "./presets";

/**
 * Defines the available presets for headings.
 */
export type THeadingsPresetNames = "sameSize" | "differentSizes";

/**
 * Defines the headings settings type.
 */
export type THeadingsSettings = {
  font?: TFontNames;
  lineHeight?: number;
  scale?: number;
  scales?: number[];
};

/**
 * Defines the headings type.
 */
export type THeadings = {
  preset?: THeadingsPresetNames;
  settings?: THeadingsSettings;
};

/**
 * Returns a heading style.
 */
const getHeading = (heading: THeadings): object => {
  const { preset, settings } = heading;

  switch (preset) {
    case "sameSize":
      return sameSize(settings);
    case "differentSizes":
      return differentSizes(settings);
  }
};

/**
 * Resizes and styles headings according to a preset.
 * Returns either a single headings or an array of headings.
 */
const useHeadings = (headings: THeadings[] | THeadings): object[] | object => {
  return Array.isArray(headings)
    ? headings &&
        headings.reduce((result, heading) => {
          return [...result, getHeading(heading)];
        }, [])
    : getHeading(headings);
};

export default useHeadings;
