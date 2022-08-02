import * as ActionTypes from "../reducer/Actiontype";

const initVal = {
  isLoading: false,
  medicine: [],
  error: "",
};

export const medicineReducer = (state = initVal, action) => {
  switch (action.type) {
    case ActionTypes.DATA_MEDICINE:
      return {
        ...state,
        isLoading: false,
        medicine: action.payload,
        error: "",
      };
      break;
    case ActionTypes.LOADING_MEDICINE:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
      break;
    case ActionTypes.ERROR_MEDICINE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
      break;
    case ActionTypes.ADD_MEDICINE:
      return {
        ...state,
        isLoading: false,
        medicine: state.medicine.concat(action.payload),
      };
    case ActionTypes.DELETE_MEDICINE:
      return {
        ...state,
        isLoading: false,
        medicine: state.medicine.filter((m) => m.id !== action.payload),
      };
    case ActionTypes.UPDATE_MEDICINE:
      return {
        ...state,
        isLoading: false,
        medicine: state.medicine.map((m) => {
          if (m.id === action.payload.id) {
            return action.payload;
          } else {
            return m;
          }
        }),
      };
    default:
      return state;
  }
};
