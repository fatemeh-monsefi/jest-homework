const getAverage = require("./1-getAverage");

describe("getAverage function", () => {
  it("should return average of three numbers", () => {
    expect(getAverage(3, 1, 5)).toBe(3);
    expect(getAverage(3, 1, 6)).toBeCloseTo(3.33, 2);
  });
});
