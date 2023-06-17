const stringLength = require("./reverse");

describe("stringLength", () => {
  test("return the length of the string", () => {
    expect(stringLength("hello")).toBe(5);
    expect(stringLength("he")).toBe(2);
    expect(stringLength("abcdefghi")).toBe(9);
  });
});
