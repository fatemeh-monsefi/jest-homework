const checkAge = require("./0-checkAge");

describe("checkAge function", () => {
  it('should return "You are eligible" if age is greater than 18', () => {
    expect(checkAge(19)).toBe("You are eligible");
  });

  it("should return false if age is not greater than 18", () => {
    expect(checkAge(18)).toBeFalsy();
  });
});
