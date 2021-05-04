import CounterContext from "./counter";
import useCounterValue from "./counter/useValue";
import type { CounterStore } from "./counter/types";

export { CounterContext, useCounterValue };
export type CounterContextStore = CounterStore;

import UserContext from "./user";
import useUserValue from "./user/useValue";
import type { UserStore } from "./user/types";

export { UserContext, useUserValue };
export type UserContextStore = UserStore;
