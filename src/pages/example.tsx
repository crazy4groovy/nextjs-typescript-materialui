import { useState } from "react";

export default function Component(props: any) {
  console.log({ props });
  const [counter, setCounter] = useState(0); // any value: number, string, obj, etc.

  return (
    <div className="simple-easy">
      <h1>This is my Example JSX page! Hello! {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        ADD +1
      </button>
    </div>
  );
}
