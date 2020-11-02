import { useStyles } from ".";

const style2 = {
  backgroundColor: "red",
};

const style3 = {
  label: "style3",
  backgroundColor: "red",
};

it("It works fine when a style object with a `label` is passed.", () => {
  expect(JSON.stringify(useStyles([style3]))).not.toBeNull();
});

it("Falls back silently on a style object without `label`.", () => {
  expect(JSON.stringify(useStyles([style2]))).not.toBeNull();
});

it("Falls back silently when there are not enough arguments", () => {
  expect(useStyles()).toStrictEqual([]);
});
