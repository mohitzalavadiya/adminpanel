import { combineReducers } from "redux";
import { CounterReducer } from "./counter.reducer";

export const Rootreducer = combineReducers({
  counter: CounterReducer,
});
