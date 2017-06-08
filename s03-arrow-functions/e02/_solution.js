const add = (a, b) => a + b;

const add5 = a => 5 + a;

const setAge = age => state => Object.assign({}, state, { age });

const increaseAge = increment => state =>
  Object.assign({}, state, { age: state.age + increment });

const humanBirthDay = increaseAge(1);

const dogBirthday = increaseAge(7);

export { add, add5, setAge, increaseAge, humanBirthDay, dogBirthday };
