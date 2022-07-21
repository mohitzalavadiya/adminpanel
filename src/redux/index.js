import CounterReducer from "./reducer/CounterReducer";
import {combineReducers} from 'redux'


const Rootreducer = combineReducers({
    counter : CounterReducer
})

export default Rootreducer;