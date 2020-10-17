import { useMemo, useState } from "react";
import { CounterStore } from "./types";

const contextProviderValue = (): CounterStore => {
  const [counter, setCounter] = useState(0);

  const contextStore = useMemo(
    (): CounterStore => ({
      addOne: () => setCounter(counter + 1),
      counter,
    }),
    [counter, setCounter]
  );

  return contextStore;
};

export default contextProviderValue;
