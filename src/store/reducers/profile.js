import storeConstants from '../constants';
import constants from '../constants';

const initialState = {};

export default function profile(state = initialState, action) {
    switch (action.type) {
        case constants.USER_FETCH_PROFILE_REQUEST:
            return {
                loading: true,
            };
        case constants.USER_FETCH_PROFILE_SUCCESS:
            return { data: action.data };
        default:
            return state;
    }
}