// @TODO: Implement a module that passes the tests.
import Module from "./_solution";
// import Module from "./module";

test.skip("setValue", () => {
  const { updaters, stateManager } = Module();

  const updaterWithEvent = updaters.setValue("some value");
  stateManager.setState(updaterWithEvent);
  const result = stateManager.getHistory();

  expect(result).toEqual([{ value: "some value" }, { value: "" }]);
});

test.skip("resetValue", () => {
  const { updaters, stateManager } = Module();

  stateManager.setState(updaters.setValue("some value"));
  stateManager.setState(updaters.resetValue);
  const result = stateManager.getHistory();

  expect(result).toEqual([
    { value: "" },
    { value: "some value" },
    { value: "" }
  ]);
});
