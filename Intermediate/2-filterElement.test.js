const filterElement = require("./2-filterElement");

describe("filterElement function", () => {
  const array = ["coffee", "cat", 2, "NinjaH2", true];

  it("should return an empty array if no matching elements was found", () => {
    expect(filterElement(array, "chips")).toEqual([]);
  });

  it("should return a filtered array of existing elements in the passed array", () => {
    expect(filterElement(array, "NinjaH2")).toEqual(["NinjaH2"]);
  });
});
