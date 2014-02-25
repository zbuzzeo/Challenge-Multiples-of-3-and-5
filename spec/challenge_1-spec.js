var challenge_1 = require("../challenge_1");
 
describe("Sum of a Multiple", function () {
  it("should return '23' for n=10", function () {
    var sum = challenge_1.sumOfAMultiple(10);
    expect(sum).toBe(23);
  });
});    