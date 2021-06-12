import { PULL } from "./actionType";
import { Dispatch } from "redux";
import { Action } from "../reducers/numberReducer";

export const pull = (arr: Array<number>) => (dispatch: Dispatch<Action>) => {
  dispatch({ type: PULL, payload: arr });
};
