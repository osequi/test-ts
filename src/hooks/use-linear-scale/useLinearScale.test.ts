import { useLinearScale } from ".";

it("Works", () => {
  expect(useLinearScale({ value: 1, lineHeight: 1 })).toBe(2.5);
});

it("Works again", () => {
  expect(useLinearScale({ value: 1, lineHeight: 1, gridLineHeight: 1.5 })).toBe(
    (1.5 / 1) * 2
  );
});
