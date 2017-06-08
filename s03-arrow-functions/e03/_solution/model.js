const initialState = { value: "" };

const setValue = value => state => Object.assign({}, state, { value });

const resetValue = state => setValue("")(state);

const updaters = {
  setValue,
  resetValue
};

export { initialState, updaters };
