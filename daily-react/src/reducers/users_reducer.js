import {
    USERS_LIST
} from '../types';

const UsersReducers =  (state = {}, action) => {
    switch (action.type) {
        case USERS_LIST:
            return { ...state, users: action.payload }
        default:
            return state;
    }
}
export default UsersReducers;