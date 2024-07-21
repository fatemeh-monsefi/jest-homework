const sum = require("./2-sum2");

describe("calculating function", () => {
  it("should throw an error if typeof one of the two parameters isn't number otherwise ", () => {
    expect(sum("a", 2)).toThrow();
    expect(sum(33, null)).toThrow();
  });

  it("should return result of 11 + 100 that equals to 111", () => {
    expect(sum(11, 100)).toBe(111);
  });
});
