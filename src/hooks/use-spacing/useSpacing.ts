export type TSpacingPresetNames = "Adjacent siblings margin top";

/**
 * Every adjacent sibling has a top margin.
 */
const adjacentSiblingsMarginTop = {
  ["& * + *"]: {
    marginTop: `var(--lem)`,
  },
  /**
   * The exceptions
   */
  ["& * + li"]: {
    marginTop: 0,
  },
  ["& tr + tr"]: {
    marginTop: 0,
  },
};

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
