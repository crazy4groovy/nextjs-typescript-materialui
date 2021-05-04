import type { responseInterface } from "swr";

export interface ApiStore {
  useItem: (id: number) => any;
  updateItem: (id: number, data: any, cb?: Function) => any;
  readItems: (cb?: Function) => Promise<any>;
}

export interface UseItem extends responseInterface<any, Error> {
  update: Function;
}

export interface UseItems extends responseInterface<any, Error> {}
