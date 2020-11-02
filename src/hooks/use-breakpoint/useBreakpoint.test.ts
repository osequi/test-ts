import { useBreakpoint } from ".";

it("Works", () => {
  expect(useBreakpoint("tablet")).not.toBeNull();
});
