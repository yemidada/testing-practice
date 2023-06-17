const reverseString = require("./reverse");
describe("reverseString", () => {
  test("returns the reversed string", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("abcd1234")).toBe("4321dcba");
  });
});
