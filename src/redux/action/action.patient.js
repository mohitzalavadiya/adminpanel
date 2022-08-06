import * as ActionTypes from "../reducer/Actiontype";

export const addpatientdata = () => (dispatch) => {
  try {
    fetch("http://localhost:3004/comments")
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: ActionTypes.DATA_PATIENT, payload: data })
      );
  } catch (error) {}
};
