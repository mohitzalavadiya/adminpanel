import * as AT from "../ActionType";
const initval = {
  count: 0,
};
export const CounterReducer = (state = initval, action) => {
  switch (action.type) {
    case AT.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case AT.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
