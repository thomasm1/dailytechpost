import postsReducer from '../posts_reducer';
import { POSTS_LIST, GET_POST_DETAIL, CLEAR_POST_DATA } from '../../types';

describe('Posts Reducer', () => {
    const initialState = {};

    it('should return initial state', () => {
        expect(postsReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle POSTS_LIST', () => {
        const mockPosts = [
            { id: 1, title: 'Post 1' },
            { id: 2, title: 'Post 2' }
        ];

        const action = {
            type: POSTS_LIST,
            payload: mockPosts
        };

        const expectedState = {
            posts: mockPosts
        };

        expect(postsReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle unknown action types', () => {
        const unknownAction = {
            type: 'UNKNOWN_ACTION',
            payload: 'some data'
        };

        expect(postsReducer(initialState, unknownAction)).toEqual(initialState);
    });

    it('should handle unknown action types', () => {
        const unknownAction = {
            type: 'UNKNOWN_ACTION',
            payload: 'some data'
        };

        expect(postsReducer(initialState, unknownAction)).toEqual(initialState);
    });
});