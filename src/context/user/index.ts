import { createContext } from "react";
import type { UserStore } from "./types";

export const defaultState: UserStore = {
  name: '',
  age: 0,
  _dispatch: () => {},
};
const Provider = createContext(defaultState);
export default Provider;
