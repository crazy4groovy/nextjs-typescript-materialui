/**
* This is a facade for _app.tsx to easily use all contexts
*/

import {
  CounterContextStore,
  useCounterValue,
  UserContextStore,
  useUserValue,
  CounterContext,
  UserContext,
} from ".";

const Provider = (props: any) => {
  const counterContextValue: CounterContextStore = useCounterValue();
  const userContextValue: UserContextStore = useUserValue();

  return (
      <CounterContext.Provider value={counterContextValue}>
        <UserContext.Provider value={userContextValue}>

          {props.children}

        </UserContext.Provider>
      </CounterContext.Provider>
  );
};

export default Provider;
