const isTruthyOrFalsy = require("./0-isTruthyOrFalsy");

describe("truthiness check function", () => {
  it("should return true if the value is true and false if it is false", () => {
    expect(isTruthyOrFalsy(true)).toBeTruthy();
    expect(isTruthyOrFalsy(false)).toBeFalsy();
  });
});
