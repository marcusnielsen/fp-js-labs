// @NOTE: Just a code sample, not really a proper test.
test.skip("forEach", () => {
  // This is *how* the solution is coded. (Imperative)
  // START
  const greeting = "Hello, World!";
  const greetingArray = greeting.split("");

  const logLetter = (letter, index) => {
    console.log(`${index}: ${letter}`);
  };
  // END

  // this is *what* the solution does. (Declarative)
  greetingArray.forEach(logLetter);

  expect(Boolean(greetingArray.length)).toEqual(true);
});
