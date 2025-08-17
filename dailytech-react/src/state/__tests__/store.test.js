import { configureStore } from '@reduxjs/toolkit';
import store from '../reducers/store';
import { POSTS_LIST } from '../types';

describe('Redux Store', () => {
    it('should have initial state', () => {
        const state = store.getState();
        
        expect(state).toHaveProperty('post');
        expect(state).toHaveProperty('user');
        expect(state.post).toEqual({});
        expect(state.user).toEqual({});
    });

    it('should handle dispatched actions', () => {
        const mockPosts = [
            { id: 1, title: 'Test Post 1' },
            { id: 2, title: 'Test Post 2' }
        ];

        store.dispatch({
            type: POSTS_LIST,
            payload: mockPosts
        });

        const state = store.getState();
        expect(state.post.posts).toEqual(mockPosts);
    });

    it('should be configured correctly', () => {
        expect(store).toBeDefined();
        expect(typeof store.dispatch).toBe('function');
        expect(typeof store.getState).toBe('function');
        expect(typeof store.subscribe).toBe('function');
    });
});