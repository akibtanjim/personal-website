import { apiUrl } from "./../../variables";
import axios from "axios";
export const LOADING = "LOADING";
export const LOADED = "LOADED";
export const UPDATE_PUBLICATION = "UPDATE_PUBLICATION";

export const getAllPublications = () => dispatch => {
  console.log("Hello");
  dispatch({ type: LOADING });
  axios
    .get(apiUrl + "/publications", {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
    .then(function(response) {
      console.log(response);
      dispatch(updateInfo(response.data.data));
      dispatch({ type: LOADED });
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
};

export const updateInfo = publication => {
  console.log(publication);
  return { type: UPDATE_PUBLICATION, publication };
};
