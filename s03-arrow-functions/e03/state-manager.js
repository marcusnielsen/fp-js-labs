const latestStateIndex = 0;

export default initialState => {
  let states = [initialState];

  const setState = updaterWithEventData => {
    const nextState = updaterWithEventData(states[latestStateIndex]);
    states = [nextState].concat(states);
  };

  const getHistory = () => states;

  return {
    setState,
    getHistory
  };
};
