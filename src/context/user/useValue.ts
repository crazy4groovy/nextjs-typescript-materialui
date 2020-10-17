import { useMemo, useReducer } from "react";

import { Action, UserStore, User } from "./types";

const initialState: UserStore = {
  name: "",
  age: 0,
  _dispatch: () => {},
};

function reducer(state: User, action: Action): User {
  return {
    ...state,
    [action.type]: action.payload,
  };
}

const contextProviderValue = (): UserStore => {
  const [state, _dispatch] = useReducer(reducer, initialState);

  const contextStore = useMemo(
    (): UserStore => ({
      ...state,
      _dispatch,
    }),
    [state, _dispatch]
  );

  return contextStore;
};

export default contextProviderValue;
