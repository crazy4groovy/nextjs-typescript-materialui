import { Dispatch } from "react";

export interface User {
  name: string,
  age: number,
}

export interface Action {
  type: keyof User;
  payload: any;
}

export interface UserStore extends User {
  _dispatch: Dispatch<Action>,
}
