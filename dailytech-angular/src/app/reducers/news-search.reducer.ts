export const SET_SEARCH_RESULT = 'SET_SEARCH_RESULT';

export function NewsSearchReducer(state: any[] = [], action: { type: string; payload?: any[] }) {
    switch (action.type) {
        case SET_SEARCH_RESULT:
            return action.payload || [];
        default:
            return state;
    }
}
