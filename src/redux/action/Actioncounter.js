import {INCREMENT,DECREMENT} from '../reducer/Actiontype'

export const Increment = () => (dispatch) => {
    dispatch({ type : INCREMENT });
}

export const Decrement = () => (dispatch) => {

    dispatch({ type : DECREMENT });
}