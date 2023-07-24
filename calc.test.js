import calc from "./calc";

test("add", () => {
  expect(calc.add(1, 2)).toEqual(3);
});

test("subtract", () => {
  expect(calc.subtract(1, 2)).toEqual(-1);
});

test("multiply", () => {
  expect(calc.multiply(1, 2)).toEqual(2);
});

test("divide", () => {
  expect(calc.divide(1, 2)).toEqual(0.5);
});
