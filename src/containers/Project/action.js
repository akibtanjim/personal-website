//import { apiUrl } from "./../../variables";
import axios from "axios";
export const LOADING = "LOADING";
export const LOADED = "LOADED";
export const UPDATE_PROJECT = "UPDATE_PROJECT";

export const getAllProjects = () => dispatch => {
  dispatch({ type: LOADING });
  axios
    .get("http://akibtanjim.com/admin/api/v1/works", {
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

export const updateInfo = project => {
  return { type: UPDATE_PROJECT, project };
};
