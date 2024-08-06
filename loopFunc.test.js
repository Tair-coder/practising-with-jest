const loopFunc = require("./loopFunc");

describe("validate", () => {
  test("true num", () => {
    expect(loopFunc(30)).toEqual(30);
  });
});
