import useSWR from "swr";

import { fetcher, UpdateItem } from "./fetcher";
import { UseItem } from "./types";

export default function useItem(id: number): UseItem {
  const swr = useSWR(["/api/items/", id], fetcher);

  return {
    ...swr,
    update: UpdateItem(swr.mutate),
  };
}
