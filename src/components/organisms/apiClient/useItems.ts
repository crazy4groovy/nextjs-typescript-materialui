import useSWR from "swr";

import { fetcher } from "./fetcher";
import type { UseItems } from "./types";

export default function useItem(): UseItems {
  const swr = useSWR(["/api/items"], fetcher);

  return {...swr};
}
