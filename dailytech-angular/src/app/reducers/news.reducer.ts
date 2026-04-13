export const SET_NEWS_STATE = 'SET_NEWS_STATE';

export function NewsReducer(state: boolean = false, action: { type: string; payload?: boolean }) {
    switch (action.type) {
        case SET_NEWS_STATE:
            return !!action.payload;
        default:
            return state;
    }
}
