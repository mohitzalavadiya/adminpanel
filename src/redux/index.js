import CounterReducer from "./reducer/CounterReducer";
import {combineReducers} from 'redux'
import { medireducer } from "./reducer/medicine.reducer";


const Rootreducer = combineReducers({
    counter : CounterReducer,
    medicine : medireducer
})

export default Rootreducer;