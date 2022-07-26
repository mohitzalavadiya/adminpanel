import CounterReducer from "./reducer/CounterReducer";
import {combineReducers} from 'redux'
import { medicineReducer } from "./reducer/medicine.reducer";


const Rootreducer = combineReducers({
    counter : CounterReducer,
    medicine : medicineReducer
})

export default Rootreducer;