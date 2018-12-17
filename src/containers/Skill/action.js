import { apiUrl } from "./../../variables";
import axios from "axios";
export const LOADING = "LOADING";
export const LOADED = "LOADED";
export const UPDATE_SKILL = "UPDATE_SKILL";

export const getAllSkills = () => dispatch => {
  dispatch({ type: LOADING });
  axios
    .get(apiUrl + "/skills", {
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

export const updateInfo = skill => {
  return { type: UPDATE_SKILL, skill };
};
