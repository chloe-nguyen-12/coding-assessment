import { PULL } from "../actions/actionType";
const initState = [0, 0, 0];

interface PullAction {
  type: typeof PULL;
  payload: Array<number>;
}

export type Action = PullAction;

const reducer = (state: Array<number> = initState, action: Action) => {
  switch (action.type) {
    case PULL:
      return [...action.payload];
    default:
      return state;
  }
};
export default reducer;
