import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import Rootreducer from ".";
import Counter from "../Counter";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["counter"],
};
const persistedReducer = persistReducer(persistConfig, Rootreducer);

const configureStore = () => {
  const store = createStore(persistedReducer, applyMiddleware(thunk));
  let persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
