/**
 * Defines the breakpoint names.
 */
export type TBreakpointNames = "mobile" | "tablet" | "laptop" | "desktop";

/**
 * Defines a breakpoint.
 */
export type TBreakpoint = {
  name: TBreakpointNames;
  value: number;
};

/**
 * Defines the breakpoints.
 */
export const breakpoints: TBreakpoint[] = [
  { name: "mobile", value: 320 },
  { name: "tablet", value: 768 },
  { name: "laptop", value: 1024 },
  { name: "desktop", value: 1600 },
];
