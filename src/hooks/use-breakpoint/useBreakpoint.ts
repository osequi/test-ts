import type { TBreakpointNames, TBreakpoint } from "../../theme";

/**
 * Returns an Emotion friendly media query for a breakpoint name.
 * @example breakpoint('tablet') => '@media(min-width: 1024px)'
 */
const useBreakpoint = (
  name: TBreakpointNames,
  breakpoints: TBreakpoint[]
): string | null => {
  const breakpoint = breakpoints.find((item) => item.name === name);
  const query = breakpoint?.value ? `min-width: ${breakpoint.value}px` : null;
  return query ? `@media(${query})` : null;
};

export default useBreakpoint;
