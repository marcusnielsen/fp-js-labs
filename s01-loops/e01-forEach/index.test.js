// @NOTE: Just a code sample, not really a proper test.
test.skip("forEach", () => {
  const greeting = "Hello, World!";
  const greetingArray = greeting.split("");

  const logLetter = (letter, index) => {
    console.log(`${index}: ${letter}`);
  };

  greetingArray.forEach(logLetter);

  expect(Boolean(greetingArray.length)).toEqual(true);
});
