test("reduce", () => {
  const data = [
    { id: 1, name: "Marcus", age: 101 },
    { id: 2, name: "Moa", age: 32 },
    { id: 3, name: "Sandra", age: 200 }
  ];

  const pluckAge = ({ age }) => age;

  // @NOTE: See totalCount as the contructor props to a React.Component
  // And the inner function as the render function, being called for each new value.
  const averageAge = totalCount => (accumulator, value) =>
    accumulator + value / totalCount;

  const result = data.map(pluckAge).reduce(averageAge(data.length), 0);

  expect(result).toEqual(111);
});
