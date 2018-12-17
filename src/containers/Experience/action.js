import { apiUrl } from "./../../variables";
import axios from "axios";
export const LOADING = "LOADING";
export const LOADED = "LOADED";
export const UPDATE_EXPERIENCE = "UPDATE_EXPERIENCE";

export const getExperiences = () => dispatch => {
  dispatch({ type: LOADING });
  axios
    .get(apiUrl + "/experiences", {
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

export const updateInfo = experience => {
  return { type: UPDATE_EXPERIENCE, experience };
};
