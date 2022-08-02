import { URL } from "../../shared/url";
import * as ActionTypes from "../reducer/Actiontype";

export const datamedicine = () => (dispatch) => {
  try {
    dispatch(loadingmedi());

    setTimeout(function () {
      fetch(URL + "posts")
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
    fetch(URL + "posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
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
      .then((data) => {
        dispatch({ type: ActionTypes.ADD_MEDICINE, payload: data });
      })
      .catch((error) => {
        dispatch(errormedi(error.message));
      });
  } catch (error) {
    dispatch(errormedi(error.message));
  }
};
export const updatemedicine = (data) => (dispatch) => {
  console.log(data.id);
  try {
    fetch(URL + "posts/" + data.id, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
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
      .then((data) => {
        dispatch({ type: ActionTypes.UPDATE_MEDICINE, payload: data });
      })
      .catch((error) => {
        dispatch(errormedi(error.message));
      });
  } catch (error) {
    dispatch(errormedi(error.message));
  }
};

export const deletemedicine = (id) => (dispatch) => {
  console.log(id);
  try {
    fetch(URL + "posts/" + id, {
      method: "DELETE",
    })
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
      .then(dispatch({ type: ActionTypes.DELETE_MEDICINE, payload: id }))
      .catch((error) => {
        dispatch(errormedi(error.message));
      });
  } catch (error) {
    dispatch(errormedi(error.message));
  }
};

export const loadingmedi = () => (dispatch) => {
  dispatch({ type: ActionTypes.LOADING_MEDICINE });
};

export const errormedi = (error) => (dispatch) => {
  dispatch({ type: ActionTypes.ERROR_MEDICINE, payload: error });
};
