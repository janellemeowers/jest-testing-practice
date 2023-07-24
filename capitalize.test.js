import capitalize from "./capitalize.js";

test("first letter cap", () => {
  expect(capitalize("hi")).toMatch(/Hi/);
});
