import axios from "axios";

export function callApi(method, url, body = {}, dispatch) {
  return new Promise(async (resolve, reject) => {
    dispatch({ type: "LOADING", data: "SHOW" });

    let objCall = {
      method: method,
      url: url,
      data: body,
    };

    let response = {};

    try {
      response = await axios(objCall);
      resolve(response);
    } catch (error) {
      if (error.request.response && error.request.response.indexOf("<") < 0) {
        const response = JSON.parse(error.request.response);
        console.log(response);
      }

      reject(error);
    } finally {
      dispatch({ type: "LOADING", data: "HIDE" });
    }
  });
}
