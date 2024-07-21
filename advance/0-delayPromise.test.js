const getUserWithDelay = require("./0-delayPromise");

describe("getUserWithDelay  function", () => {
  it("should return the user object with the specified userId after 1 second", async () => {
    const userData = { id: 3, name: `User ${3}` };

    const getUserData = await getUserWithDelay(3);

    expect(getUserData).toMatchObject(userData);
  });
});
