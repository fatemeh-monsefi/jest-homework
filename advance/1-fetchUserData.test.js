const fetchUserData = require("./1-fetchUserData");

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ id: 3, name: "Clementine Bauch" }),
  })
);

describe("fetchUserData function", () => {
  const userId = 3;
  const URL = `https://jsonplaceholder.typicode.com/users/${userId}`;
  const data = { id: 3, name: "Clementine Bauch" };

  it("should call fetch with the correct URL ", async () => {
    await fetchUserData(userId);
    expect(fetch).toHaveBeenCalledWith(URL);
  });

  it("should return the correct user data with a specific userId", async () => {
    const getData = await fetchUserData(userId);
    expect(getData).toEqual(data);
  });
});
