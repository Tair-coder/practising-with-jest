const ageValidator = require("./ageValidator");

describe("check, can user get to concert is started", () => {
  test("sorry not your age", () => {
    expect(ageValidator(17, true)).toBe(
      "sorry, but you can not pass to concert"
    );
  });
  test("sorry, you do not have ticket", () => {
    expect(ageValidator(18, false)).toBe(
      "sorry, but you can not pass to concert"
    );
  });
  test("SUCCESFUL PASS CONTROL", () => {
    expect(ageValidator(20, true)).toBe("you are welcome");
  });
});
