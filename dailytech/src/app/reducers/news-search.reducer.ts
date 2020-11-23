export const SET_SEARCH_RESULT = 'SET_SEARCH_RESULT';

export function NewsSearchReducer(state, action) {
    switch (action.type) {
        case SET_SEARCH_RESULT:
            return action.payload;
        default:
            return state;
    }
}
