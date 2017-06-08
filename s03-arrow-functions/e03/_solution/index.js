import { initialState, updaters } from "./model";
import StateManager from "../state-manager";

export default () => {
  const stateManager = StateManager(initialState);

  return { stateManager, initialState, updaters };
};
