import * as ActionTypes from "../reducer/Actiontype";

export const datamedicine = () => (dispatch) => {
  try {
    dispatch(loadingmedi());

    setTimeout(function () {
      fetch("http://localhost:3004/posts")
        .then(
          (response) => {
            if (response.ok) {
              return response;
            } else {
              var error = new Error(
                "An Error occurred " +
                  response.status +
                  ": " +
                  response.statusText
              );
              error.response = response;
              throw error;
            }
          },
          (error) => {
            var errmess = new Error(error.message);
            throw errmess;
          }
        )

        .then((response) => response.json())
        .then((data) =>
          dispatch({ type: ActionTypes.DATA_MEDICINE, payload: data })
        )
        .catch((error) => dispatch(errormedi(error.message)));
    }, 2000);
  } catch (error) {
    dispatch(errormedi(error.message));
  }
};
export const addmedicine = (data) => (dispatch) => {
  try {
    fetch("http://localhost:3004/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ActionTypes.ADD_MEDICINE, payload: data });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } catch (error) {}
};

export const loadingmedi = () => (dispatch) => {
  dispatch({ type: ActionTypes.LOADING_MEDICINE });
};

export const errormedi = (error) => (dispatch) => {
  dispatch({ type: ActionTypes.ERROR_MEDICINE, payload: error });
};
