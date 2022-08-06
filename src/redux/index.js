import CounterReducer from "./reducer/CounterReducer";
import { combineReducers } from "redux";
import { medicineReducer } from "./reducer/medicine.reducer";
import { patientreducer } from "./reducer/patient.reducer";

const Rootreducer = combineReducers({
  counter: CounterReducer,
  medicine: medicineReducer,
  patient: patientreducer,
});

export default Rootreducer;
