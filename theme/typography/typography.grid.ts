/**
 * Defines the typographic grid type.
 */
export type TTypographicGrid = {
  /**
   * Responsive font sizes for the breakpoints.
   * The first number is for the smallest viewports, like watches.
   * The rest of the numbers are for each breakpoint, like mobile, tablet and co.
   */
  fontSizes: [number, number, number, number, number];
  lineHeight: number;
};

/**
 * Defines the default typographic grid.
 */
export const typographicGrid: TTypographicGrid = {
  fontSizes: [100, 100, 110, 120, 140],
  lineHeight: 1.25,
};
