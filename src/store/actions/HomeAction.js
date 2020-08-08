import { callApi } from "../../utils/callApi";

export function fetchPublications() {
  return async function (dispatch) {
    try {
      const res = await callApi(
        "GET",
        "http://www.mocky.io/v2/5be5e3fa2f000082000fc3f8",
        {},
        dispatch
      );
      return dispatch({
        type: "FETCH_PUBLICATIONS",
        data: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function fetchAuthor() {
  return async function (dispatch) {
    try {
      const res = await callApi(
        "GET",
        "http://www.mocky.io/v2/5be5e3ae2f00005b000fc3f6",
        {},
        dispatch
      );
      return dispatch({
        type: "FETCH_AUTHOR",
        data: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
