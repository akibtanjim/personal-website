import { apiUrl } from "./../../variables";
import axios from "axios";
export const LOADING = "LOADING";
export const LOADED = "LOADED";
export const UPDATE_EDUCATION = "UPDATE_EDUCATION";

export const getAllEducations = () => dispatch => {
  dispatch({ type: LOADING });
  axios
    .get(apiUrl + "/educations", {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
    .then(function(response) {
      dispatch(updateInfo(response.data.data));
      dispatch({ type: LOADED });
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
};

export const updateInfo = education => {
  return { type: UPDATE_EDUCATION, education };
};
