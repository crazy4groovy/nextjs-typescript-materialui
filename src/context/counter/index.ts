import { createContext } from "react";
import type { CounterStore } from "./types";

export const defaultState: CounterStore = {
  counter: 0,
  addOne: () => {},
};
const Provider = createContext(defaultState);
export default Provider;
