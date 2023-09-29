const hello = require("../src/hello");

test("should say hello to given name", function(){
    // setup
    const name = "Hugo";

    // execute
    const result = hello(name);

    // expectations
    expect(result).toEqual("Hello Hugo!");
});

// ... other code

test("should say 'Hello World!' when no name is provided", function () {
    // setup
    const expected = "Hello World!";
  
    // execute
    const result = hello();
  
    // expectations
    expect(result).toEqual(expected);
  });

  test("should say hello to other name", function(){
    // setup
    const name = "Jesús";

    // execute
    const result = hello(name);

    // expectations
    expect(result).toEqual("Hello Jesús!");
});