const time = require("../src/time");

test("should return '0s' for 0 seconds", function () {
  // setup
  const seconds = 0;

  // execute
  const result = time(seconds);

  // expectation
  expect(result).toEqual("0s");
});

// other tests...

test("should return '1s' for 1 second", function () {
    // setup
    const seconds = 1;
  
    // execute
    const result = time(seconds);
  
    // expectation
    expect(result).toEqual("1s");
  });