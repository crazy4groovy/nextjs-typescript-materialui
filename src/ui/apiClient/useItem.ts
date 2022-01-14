import useSWR from "swr";
import type { mutate as _mutate } from "swr";
import { fetcher, poster } from "./fetcher";
import type { UseItem } from "./types";

export default function useItem(id: number): UseItem {
  const swr = useSWR(["/api/items/", id], fetcher);

  return {
    ...swr,
    update: updateItem(swr.mutate),
  };
}

const updateItem =
  (mutate: typeof _mutate) => async (id: number, data: any) => {
    mutate(data, false); // trust...
    console.log(data.name, "mutated (eager)");
    const body = JSON.stringify(data);
    return await poster("/api/items/", id, body)
      .catch(() => {})
      .finally(() => {
        mutate(data, true); // but verify!
        console.log(data.name, "mutated (verify)");
      });
  };
