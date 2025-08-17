import axios from 'axios';
import postsService from '../postsService';
import { POSTS_BASE_URL, JWT_TOKEN } from '../../config';

jest.mock('axios');
const mockedAxios = axios;

describe('PostsService', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        Object.defineProperty(window, 'localStorage', {
            value: {
                getItem: jest.fn(() => null),
            },
            writable: true
        });
        global.alert = jest.fn();
    });

    describe('createPost', () => {
        it('should create a post successfully', async () => {
            const mockValues = {
                title: 'Test Post',
                post: 'Test content',
                cat3: 'Tech',
                blogcite: ['Citation 1', 'Citation 2']
            };

            mockedAxios.post.mockResolvedValue({ data: { id: 1 } });

            await postsService.createPost(mockValues);

            expect(mockedAxios.post).toHaveBeenCalledWith(
                `${POSTS_BASE_URL}/posts`,
                expect.objectContaining({
                    title: 'Test Post',
                    post: 'Test content',
                    cat3: 'Tech',
                    author: 'anonymous',
                    email: 'anonymous@gmail.com',
                    categoryId: 12,
                    blogcite: 'Citation 1, Citation 2'
                })
            );
            expect(global.alert).toHaveBeenCalledWith('Post created successfully!');
        });

        it('should handle post creation error', async () => {
            const mockValues = { title: 'Test', post: 'Content', blogcite: [] };
            const consoleError = jest.spyOn(console, 'error').mockImplementation();

            mockedAxios.post.mockRejectedValue(new Error('API Error'));

            await postsService.createPost(mockValues);

            expect(consoleError).toHaveBeenCalledWith('Error creating post:', expect.any(Error));
            expect(global.alert).toHaveBeenCalledWith('Error creating post. Please check the console for details.');
            
            consoleError.mockRestore();
        });
    });

    describe('addWeblink', () => {
        it('should add weblink to existing post', async () => {
            const mockPost = {
                id: 1,
                title: 'Existing Post',
                weblinks: [{ title: 'Existing Link', url: 'https://existing.com' }]
            };
            const newWeblink = { title: 'New Citation', url: 'https://new-citation.com' };

            mockedAxios.get.mockResolvedValue({ data: mockPost });
            mockedAxios.put.mockResolvedValue({ data: mockPost });

            await postsService.addWeblink(1, newWeblink);

            expect(mockedAxios.get).toHaveBeenCalledWith(`${POSTS_BASE_URL}/posts/1`, {
                headers: { Authorization: `Bearer ${JWT_TOKEN}` }
            });

            expect(mockedAxios.put).toHaveBeenCalledWith(
                `${POSTS_BASE_URL}/posts/1`,
                expect.objectContaining({
                    weblinks: expect.arrayContaining([
                        { title: 'Existing Link', url: 'https://existing.com' },
                        newWeblink
                    ])
                }),
                { headers: { Authorization: `Bearer ${JWT_TOKEN}` } }
            );
        });

        it('should create weblinks array if none exists', async () => {
            const mockPost = { id: 1, title: 'Post Without Weblinks' };
            const newWeblink = { title: 'First Citation', url: 'https://first.com' };

            mockedAxios.get.mockResolvedValue({ data: mockPost });
            mockedAxios.put.mockResolvedValue({ data: mockPost });

            await postsService.addWeblink(1, newWeblink);

            expect(mockedAxios.put).toHaveBeenCalledWith(
                `${POSTS_BASE_URL}/posts/1`,
                expect.objectContaining({
                    weblinks: [newWeblink]
                }),
                { headers: { Authorization: `Bearer ${JWT_TOKEN}` } }
            );
        });
    });

    describe('getPost', () => {
        it('should fetch single post by id', async () => {
            const mockPost = { id: 1, title: 'Test Post' };
            mockedAxios.get.mockResolvedValue({ data: mockPost });

            const result = await postsService.getPost(1);

            expect(mockedAxios.get).toHaveBeenCalledWith(`${POSTS_BASE_URL}/posts/1`);
            expect(result).toEqual(mockPost);
        });
    });

    describe('getPosts', () => {
        it('should fetch all posts', async () => {
            const mockPosts = [
                { id: 1, title: 'Post 1' },
                { id: 2, title: 'Post 2' }
            ];
            mockedAxios.get.mockResolvedValue({ data: mockPosts });

            const result = await postsService.getPosts();

            expect(mockedAxios.get).toHaveBeenCalledWith(`${POSTS_BASE_URL}/posts`);
            expect(result).toEqual(mockPosts);
        });
    });
});