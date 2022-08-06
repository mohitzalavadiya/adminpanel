import * as AT from "../ActionType";
export const incrementaction = () => (dispatch) => {
  dispatch({
    type: AT.INCREMENT,
  });
};

export const decrementaction = () => (dispatch) => {
  dispatch({
    type: AT.DECREMENT,
  });
};
