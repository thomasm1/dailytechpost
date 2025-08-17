import axios from 'axios';
import { addWeblink, getPosts, getPostDetail, clearPostData } from '../postsAction';
import { POSTS_BASE_URL, JWT_TOKEN } from '../../../config';
import { POSTS_LIST, GET_POST_DETAIL, CLEAR_POST_DATA } from '../../types';

jest.mock('axios');
const mockedAxios = axios;

describe('Posts Actions', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        Object.defineProperty(window, 'localStorage', {
            value: {
                getItem: jest.fn(() => null),
            },
            writable: true
        });
    });

    describe('addWeblink', () => {
        it('should add weblink to post and return updated posts list', async () => {
            const postId = 1;
            const weblink = { title: 'Citation', url: 'https://example.com' };
            const mockPost = { id: 1, title: 'Test Post', weblinks: [] };
            const mockPostsList = [mockPost];

            mockedAxios.get
                .mockResolvedValueOnce({ data: mockPost })
                .mockResolvedValueOnce({ data: mockPostsList });
            mockedAxios.put.mockResolvedValue({ data: mockPost });

            const result = await addWeblink(postId, weblink);

            expect(mockedAxios.get).toHaveBeenCalledWith(`${POSTS_BASE_URL}/posts/${postId}`, {
                headers: { Authorization: `Bearer ${JWT_TOKEN}` }
            });

            expect(mockedAxios.put).toHaveBeenCalledWith(
                `${POSTS_BASE_URL}/posts/${postId}`,
                expect.objectContaining({
                    weblinks: [weblink]
                }),
                { headers: { Authorization: `Bearer ${JWT_TOKEN}` } }
            );

            expect(result).toEqual({
                type: POSTS_LIST,
                payload: mockPostsList
            });
        });

        it('should handle post with existing weblinks', async () => {
            const postId = 1;
            const existingWeblink = { title: 'Old Link', url: 'https://old.com' };
            const newWeblink = { title: 'New Link', url: 'https://new.com' };
            const mockPost = { 
                id: 1, 
                title: 'Test Post', 
                weblinks: [existingWeblink] 
            };

            mockedAxios.get
                .mockResolvedValueOnce({ data: mockPost })
                .mockResolvedValueOnce({ data: [mockPost] });
            mockedAxios.put.mockResolvedValue({ data: mockPost });

            await addWeblink(postId, newWeblink);

            expect(mockedAxios.put).toHaveBeenCalledWith(
                `${POSTS_BASE_URL}/posts/${postId}`,
                expect.objectContaining({
                    weblinks: [existingWeblink, newWeblink]
                }),
                expect.any(Object)
            );
        });
    });

    describe('getPosts', () => {
        it('should fetch all posts and return action object', async () => {
            const mockPosts = [
                { id: 1, title: 'Post 1' },
                { id: 2, title: 'Post 2' }
            ];

            mockedAxios.get.mockResolvedValue({ data: mockPosts });

            const result = await getPosts();

            expect(mockedAxios.get).toHaveBeenCalledWith(`${POSTS_BASE_URL}/posts`);
            expect(result).toEqual({
                type: POSTS_LIST,
                payload: mockPosts
            });
        });
    });

    describe('getPostDetail', () => {
        it('should fetch single post by id', async () => {
            const postId = 1;
            const mockResponse = { data: { id: 1, title: 'Detailed Post' } };

            mockedAxios.get.mockResolvedValue(mockResponse);

            const result = await getPostDetail(postId);

            expect(mockedAxios.get).toHaveBeenCalledWith(`${POSTS_BASE_URL}/posts/${postId}`);
            expect(result).toEqual({
                type: GET_POST_DETAIL,
                payload: mockResponse
            });
        });
    });

    describe('clearPostData', () => {
        it('should return clear action', () => {
            const result = clearPostData();

            expect(result).toEqual({
                type: CLEAR_POST_DATA,
                payload: null
            });
        });
    });
});