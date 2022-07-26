import * as ActionTypes from "../reducer/Actiontype"

const initVal = {
    isLoading: false,
    medicine: [],
    error: []
}

export const medicineReducer = (state = initVal, action) => {
    switch (action.type) {
        case ActionTypes.DATA_MEDICINE:
            return {
                ...state,
                isLoading: false,
                medicine: action.payload,
                error: []
            }
            break;
        default :
        return state;    
    }
}