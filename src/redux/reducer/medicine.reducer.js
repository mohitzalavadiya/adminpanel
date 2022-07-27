import * as Actiontype from "../reducer/Actiontype"

const initval = {
    isLoading : false,
    medicine : [], 
    error : ''
} 
export const medireducer = (state = initval, action) => {

    switch(action.type){
        case Actiontype.DATA_MEDICINE :
            return{
                ...state,
                medicine : action.payload
            }
        default : 
        return state;
    }
}