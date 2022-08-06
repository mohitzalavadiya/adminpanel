import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Rootreducer } from "./reducer";

export const configureStore = () => {
  let store = createStore(Rootreducer, applyMiddleware(thunk));
  return store;
};
