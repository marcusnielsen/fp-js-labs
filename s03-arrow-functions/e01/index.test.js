// @TODO: Fix tests first. Remove .skip and make the test green.
// Then update "./_solution" to be "./index" and write code that passes the tests.
// (For this exercize, you can peek at the solution implementation.)

// import * as module from "./index";
import * as module from "./_solution";

test.skip("add", () => {
  const result = module.add(1, 2);

  expect(result).toEqual(0); // @TODO
});

test.skip("subtract", () => {
  const result = 0; // @TODO

  expect(result).toEqual(-1);
});

test.skip("multiply", () => {
  const result = 0; // @TODO

  expect(result).toEqual(12);
});

test.skip("divide", () => {
  const result = 0; // @TODO

  expect(result).toEqual(4);
});
