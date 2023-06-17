const capitalize = require("./capitalize");
describe("capitalize", () => {
  test("returns the string with the first character capitalized", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("world")).toBe("World");
    expect(capitalize("openai")).toBe("Openai");
  });
});
