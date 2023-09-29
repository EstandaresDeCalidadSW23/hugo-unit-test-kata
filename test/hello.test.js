const hello = require("../src/hello");

test("should say hello to given name", function(){
    // setup
    const name = "Hugo";

    // execute
    const result = hello(name);

    // expectations
    expect(result).toEqual("Hello Hugo!");
});
