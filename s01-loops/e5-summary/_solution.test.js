// Environment variable
// @NOTE: try changing it to false.
const production = true;

// Configuration data
const anonymousKeys = production ? ["id", "name"] : ["id"];
const anonymousReplacement = "anonymous";
// eslint-disable-next-line no-console
const consoleLog = console.log;

// Loaded data
const apiData = Promise.resolve([
  { id: 1, name: "Marcus", subscriber: true },
  { id: 2, name: "Moa", subscriber: false },
  { id: 3, name: "Sandra", subscriber: false }
]);

// START: Business logic
const replaceByKeyReducer = replacement => (acc, key) =>
  Object.assign({}, acc, {
    [key]: replacement
  });

const replacedKeys = (replacement, keys) =>
  keys.reduce(replaceByKeyReducer(replacement), {});

const anonymousUser = (replacement, keys) => userData =>
  Object.assign({}, userData, replacedKeys(replacement, keys));

const nonSubscribers = ({ subscriber }) => !subscriber;

const printAsJson = print => value => {
  print(JSON.stringify(value, null, 2));
  return value;
};

const runApplication = print => userData =>
  userData
    .map(anonymousUser(anonymousReplacement, anonymousKeys))
    .filter(nonSubscribers)
    // Effect that prints to screen. Try changing to a map function.
    .forEach(printAsJson(print));
// END: Business logic

test.skip("summary replaceByKeyReducer unit test", () => {
  const replacement = "replacement";
  const accumulator = {};
  const replacementKey = "someKey";
  const replacementReducer = replaceByKeyReducer(replacement);

  const result = replacementReducer(accumulator, replacementKey);
  const expected = {
    someKey: "replacement"
  };

  expect(result).toEqual(expected);
});

test.skip("summary replacedKeys unit test", () => {
  const replacement = "replacement";
  const replacementKeys = ["someKey", "anotherKey"];

  const result = replacedKeys(replacement, replacementKeys);
  const expected = {
    someKey: "replacement",
    anotherKey: "replacement"
  };

  expect(result).toEqual(expected);
});

test.skip("summary functional test", () =>
  apiData.then(runApplication(consoleLog)).then(result => {
    expect(typeof result).toEqual("undefined");
  })
);

// Example of mock testing the printing part of the application
test.skip("summary mocked test", () => {
  const mockPrint = jest.fn();

  const mockData0 = {
    id: "secret id 1",
    name: "name 1",
    publicKey: "public value"
  };

  const mockData1 = {
    id: "secret id 2",
    name: "name 2",
    publicKey: "public value 2"
  };

  const mockData = [mockData0, mockData1];

  runApplication(mockPrint)(mockData);

  const anonymizedData0 = {
    id: "anonymous",
    name: "anonymous",
    publicKey: "public value"
  };

  const anonymizedData1 = {
    id: "anonymous",
    name: "anonymous",
    publicKey: "public value 2"
  };

  // two mock function calls (outer array),
  // one argument each (inner array),
  // and content gets JSON stringified in the printAsJson function.
  const expectedData = [
    [JSON.stringify(anonymizedData0, null, 2)],
    [JSON.stringify(anonymizedData1, null, 2)]
  ];

  expect(mockPrint.mock.calls).toEqual(expectedData);
});
