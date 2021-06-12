import { combineReducers } from "redux";
import numberReducers from "./numberReducer";

const reducers = combineReducers({
  number: numberReducers,
});

export default reducers;
export type State = ReturnType<typeof reducers>;
