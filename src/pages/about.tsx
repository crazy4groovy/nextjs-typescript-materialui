import React, { useContext } from "react";

import About from "../components/pages/about";
import { useItem, useItems } from "../components/organisms/apiClient";
import { CounterContext, UserContext } from "../context";

export default function Component(props: any) {
  const counterCtxValue = useContext(CounterContext);
  const userCtxValue = useContext(UserContext);
  const swrItem = useItem(101);
  const swrItems = useItems();

  // TODO: this is begging for namespace collisions...
  return (
    <About
      swrItem={swrItem}
      swrItems={swrItems}
      {...userCtxValue}
      {...counterCtxValue}
      {...props}
    />
  );
}
