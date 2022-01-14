import {
  CounterContextStore,
  UserContextStore,
} from "../../context";
import { UseItem, UseItems } from "../apiClient/types";

export interface Props
  extends CounterContextStore,
    UserContextStore {
      swrItem: UseItem
      swrItems: UseItems
    }
