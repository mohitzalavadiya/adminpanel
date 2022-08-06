import * as ActionTypes from "../reducer/Actiontype";

const initval = {
  isLoding: false,
  patient: [],
  erroe: "",
};

export const patientreducer = (state = initval, action) => {
  switch (action.type) {
    case ActionTypes.DATA_PATIENT:
      return {
        isLoding: false,
        patient: action.payload,
        erroe: "",
      };
    default:
      return state;
  }
};
