const validateNumFunc = require("./validateNum");

describe("ValidateVal", () => {
  test("True value", () => {
    expect(validateNumFunc(50)).toBe(true);
  });

  test("false value", () => {
    expect(validateNumFunc(101)).toBe(false);
  });
});
