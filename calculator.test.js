const Calculator = require("./calculator");
describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe("add", () => {
    test("adds two numbers correctly", () => {
      expect(calculator.add(2, 3)).toBe(5);
    });
  });

  describe("subtract", () => {
    test("subtracts two numbers correctly", () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });
  });

  describe("divide", () => {
    test("divides two numbers correctly", () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test("throws an error when dividing by zero", () => {
      expect(() => calculator.divide(10, 0)).toThrow("Division by zero!");
    });
  });

  describe("multiply", () => {
    test("multiplies two numbers correctly", () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });
  });
});
