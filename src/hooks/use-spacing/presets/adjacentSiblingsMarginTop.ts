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

export default adjacentSiblingsMarginTop;
