import { fetchProfile } from "../../services/profile";
import constants from "../constants";

export function fetchProfileAction() {
    return dispatch => {
        dispatch({ type: constants.USER_FETCH_PROFILE_REQUEST });

        fetchProfile()
            .then(
                data => { 
                    dispatch({ type: constants.USER_FETCH_PROFILE_SUCCESS, data });
                },
                error => {
                    console.log(error);
                }
            );
    };
}