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
};

/**
 * Resizes and styles headings according to a preset.
 */
const useHeadings = (
  preset: THeadingsPresetNames,
  settings: THeadingsSettings
): object => {
  switch (preset) {
    case "sameSize":
      return sameSize(settings);
    case "differentSizes":
      return differentSizes(settings);
  }
};

export default useHeadings;
