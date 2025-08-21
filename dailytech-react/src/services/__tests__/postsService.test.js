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
        it('should add weblink to a post successfully', async () => {
            const postId = 24;
            const mockWeblink = {
                title: 'Test Link',
                url: 'https://example.com',
                host: 'example.com',
                profileUrl: 'https://example.com/profile',
                ownerEmail: 'owner@example.com',
                web3Link: true
            };

            localStorage.getItem = jest.fn(() => 'mock-token');
            mockedAxios.post.mockResolvedValue({ data: { id: 1, ...mockWeblink } });

            await postsService.addWeblink(postId, mockWeblink);

            expect(mockedAxios.post).toHaveBeenCalledWith(
                `${POSTS_BASE_URL}/weblinks/posts/${postId}`,
                mockWeblink,
                {
                    headers: {
                        Authorization: 'Bearer mock-token'
                    }
                }
            );
        });

        it('should use JWT_TOKEN when no access token in localStorage', async () => {
            const postId = 24;
            const mockWeblink = { title: 'Test', url: 'https://example.com' };

            localStorage.getItem = jest.fn(() => null);
            mockedAxios.post.mockResolvedValue({ data: mockWeblink });

            await postsService.addWeblink(postId, mockWeblink);

            expect(mockedAxios.post).toHaveBeenCalledWith(
                `${POSTS_BASE_URL}/weblinks/posts/${postId}`,
                mockWeblink,
                {
                    headers: {
                        Authorization: `Bearer ${JWT_TOKEN}`
                    }
                }
            );
        });

        it('should handle addWeblink error', async () => {
            const postId = 24;
            const mockWeblink = { title: 'Test', url: 'https://example.com' };

            mockedAxios.post.mockRejectedValue(new Error('API Error'));

            await expect(postsService.addWeblink(postId, mockWeblink))
                .rejects
                .toThrow('API Error');
        });
    });

    describe('editWeblink', () => {
        it('should edit weblink successfully', async () => {
            const weblinkId = 13;
            const mockWeblink = {
                title: 'Updated Test Link',
                url: 'https://updated-example.com',
                host: 'updated-example.com'
            };

            localStorage.getItem = jest.fn(() => 'mock-token');
            mockedAxios.put.mockResolvedValue({ data: { id: weblinkId, ...mockWeblink } });

            await postsService.editWeblink(weblinkId, mockWeblink);

            expect(mockedAxios.put).toHaveBeenCalledWith(
                `${POSTS_BASE_URL}/weblinks/${weblinkId}`,
                mockWeblink,
                {
                    headers: {
                        Authorization: 'Bearer mock-token'
                    }
                }
            );
        });

        it('should use JWT_TOKEN when no access token in localStorage', async () => {
            const weblinkId = 13;
            const mockWeblink = { title: 'Updated Test', url: 'https://updated.com' };

            localStorage.getItem = jest.fn(() => null);
            mockedAxios.put.mockResolvedValue({ data: mockWeblink });

            await postsService.editWeblink(weblinkId, mockWeblink);

            expect(mockedAxios.put).toHaveBeenCalledWith(
                `${POSTS_BASE_URL}/weblinks/${weblinkId}`,
                mockWeblink,
                {
                    headers: {
                        Authorization: `Bearer ${JWT_TOKEN}`
                    }
                }
            );
        });

        it('should handle editWeblink error', async () => {
            const weblinkId = 13;
            const mockWeblink = { title: 'Test', url: 'https://example.com' };

            mockedAxios.put.mockRejectedValue(new Error('Update failed'));

            await expect(postsService.editWeblink(weblinkId, mockWeblink))
                .rejects
                .toThrow('Update failed');
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