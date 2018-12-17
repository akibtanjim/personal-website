import {apiUrl} from './../../variables';
import axios from "axios";
export const LOADING = "LOADING";
export const LOADED = "LOADED";
export const UPDATE_INFO = "INFO"

export const getInfo = () => dispatch => {
    dispatch({type: LOADING});
    axios
        .get(apiUrl + '/info', {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(function (response) {
            dispatch(updateInfo(response.data.data));
            dispatch({type: LOADED});
        })
        .catch(function (error) { // handle error
            console.log(error);
        })
};

export const updateInfo = info => {
    return {type: UPDATE_INFO, info};
};
