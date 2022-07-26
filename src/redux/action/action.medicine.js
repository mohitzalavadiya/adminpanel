import * as ActionTypes from "../reducer/Actiontype"


export const datamedicine = () => (dispatch) => {
    fetch('http://localhost:3004/posts')
  .then((response) => response.json())
  .then((data) =>dispatch({type : ActionTypes.DATA_MEDICINE, payload:data}));
}