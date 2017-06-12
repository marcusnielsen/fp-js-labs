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

test("summary", () => {
  expect(replaceByKeyReducer("replacement")({}, "someKey")).toEqual({
    someKey: "replacement"
  });

  expect(replacedKeys("replacement", ["someKey", "anotherKey"])).toEqual({
    someKey: "replacement",
    anotherKey: "replacement"
  });

  const mockPrint = jest.fn();
  const mockData = [
    { id: "secret id 1", name: "name 1", publicKey: "public value" },
    {
      id: "secret id 2",
      name: "name 2",
      publicKey: "public value 2"
    }
  ];

  runApplication(mockPrint)(mockData);

  // two calls (outer array), one argument each (inner array), and content gets stringified
  const expectedData = [
    [
      JSON.stringify(
        { id: "anonymous", name: "anonymous", publicKey: "public value" },
        null,
        2
      )
    ],
    [
      JSON.stringify(
        {
          id: "anonymous",
          name: "anonymous",
          publicKey: "public value 2"
        },
        null,
        2
      )
    ]
  ];

  expect(mockPrint.mock.calls).toEqual(expectedData);

  return apiData.then(runApplication(consoleLog)).then(result => {
    expect(typeof result).toEqual("undefined");
  });
});
