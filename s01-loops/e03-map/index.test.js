test.skip("map", () => {
  const data = [
    { id: 1, name: "Marcus" },
    { id: 2, name: "Moa" },
    { id: 3, name: "Sandra" }
  ];

  const pluckName = item => item.name;

  const result = data.map(pluckName);

  expect(result).toEqual(["Marcus", "Moa", "Sandra"]);
});
