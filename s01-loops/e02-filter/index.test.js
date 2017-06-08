test.skip("filter", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

  const filterEven = number => number % 2;

  const result = numbers.filter(filterEven);

  expect(result).toEqual([1, 3, 5, 7]);
});
