import { adjacentSiblingsMarginTop } from "./";

export type TSpacingPresetNames = "Adjacent siblings margin top";

/**
 * Returns a specifing typographic spacing.
 */
const useSpacing = (preset: TSpacingPresetNames): object => {
  switch (preset) {
    case "Adjacent siblings margin top":
      return adjacentSiblingsMarginTop;
  }
};

export default useSpacing;
