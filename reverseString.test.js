import reverseString from "./reverseString";

test("string is reversed", () => {
  expect(reverseString("dog")).toBe("god");
});

test("sentence is reversed", () => {
  expect(reverseString("hi there")).toBe("ereht ih");
});
