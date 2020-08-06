import constants from '../constants';
import { login as serviceLogin, logout as serviceLogout } from '../../services/auth';
import history from '../../history';

import { navigate } from '@reach/router';

export function login(email, password) {
    return dispatch => {
        dispatch(request({ email }));

        serviceLogin(email, password)
            .then(
                user => { 
                    dispatch(success(user));
                    navigate('/portfolio');
                },
                error => {
                    dispatch(failure(error));
                    // dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: constants.LOGIN_REQUEST, user } }
    function success(user) { return { type: constants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: constants.LOGIN_FAILURE, error } }
}

export function logout() {
    serviceLogout();
    return { type: constants.LOGOUT };
}