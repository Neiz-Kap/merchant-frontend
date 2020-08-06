import authHeader from "../helpers/AuthHeader";
import handleResponse from "../helpers/ResponseHandler";

export function fetchProfile() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };

    return fetch(`http://13.74.170.114:3001/api/v1/profile`, requestOptions)
        .then(handleResponse)
        .then(data => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            return data;
        });
}