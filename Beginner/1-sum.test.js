const sum = require("./1-sum");

describe("calculating function", () => {
  it("should return the result of 2 + 25 that equals to 27", () => {
    expect(sum(2, 25)).toBe(27);
  });
});
