import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Rootreducer from ".";

const configureStore = () => {
    const store = createStore(Rootreducer, applyMiddleware(thunk));
    
    return store;
}

export default configureStore;