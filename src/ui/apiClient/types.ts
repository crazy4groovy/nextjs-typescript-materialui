import type { SWRResponse } from "swr";

export interface ApiStore {
  useItem: (id: number) => any;
  updateItem: (id: number, data: any, cb?: Function) => any;
  readItems: (cb?: Function) => Promise<any>;
}

export interface UseItem extends SWRResponse<any, Error> {
  update: Function;
}

export interface UseItems extends SWRResponse<any, Error> {}
