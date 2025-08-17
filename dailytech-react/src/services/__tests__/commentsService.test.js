import axios from 'axios';
import commentsService from '../commentsService';
import { POSTS_BASE_URL, JWT_TOKEN } from '../../config';

jest.mock('axios');
const mockedAxios = axios;

describe('CommentsService', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        Object.defineProperty(window, 'localStorage', {
            value: {
                getItem: jest.fn(() => null),
            },
            writable: true
        });
    });

    describe('addComment', () => {
        it('should add comment to post successfully', async () => {
            const mockComment = {
                name: 'John Doe',
                email: 'john@example.com',
                body: 'Great post!'
            };
            const postId = 1;

            mockedAxios.post.mockResolvedValue({ data: { id: 1 } });

            await commentsService.addComment(mockComment, postId);

            expect(mockedAxios.post).toHaveBeenCalledWith(
                `${POSTS_BASE_URL}/posts/${postId}/comments`,
                mockComment,
                {
                    headers: {
                        Authorization: `Bearer ${JWT_TOKEN}`
                    }
                }
            );
        });

        it('should use localStorage token if available', async () => {
            const mockToken = 'custom-token-123';
            window.localStorage.getItem = jest.fn(() => mockToken);

            const mockComment = { name: 'Test', email: 'test@test.com', body: 'Comment' };
            mockedAxios.post.mockResolvedValue({ data: {} });

            await commentsService.addComment(mockComment, 1);

            expect(mockedAxios.post).toHaveBeenCalledWith(
                expect.any(String),
                expect.any(Object),
                {
                    headers: {
                        Authorization: `Bearer ${mockToken}`
                    }
                }
            );
        });
    });

    describe('getComments', () => {
        it('should fetch comments for a post', async () => {
            const postId = 1;
            const mockComments = [
                { id: 1, name: 'User1', body: 'Comment 1' },
                { id: 2, name: 'User2', body: 'Comment 2' }
            ];

            mockedAxios.get.mockResolvedValue({ data: mockComments });

            const result = await commentsService.getComments(postId);

            expect(mockedAxios.get).toHaveBeenCalledWith(`${POSTS_BASE_URL}/posts/${postId}/comments`);
            expect(result).toEqual(mockComments);
        });
    });

    describe('getComment', () => {
        it('should fetch single comment by id', async () => {
            const postId = 1;
            const commentId = 5;
            const mockComment = { id: 5, name: 'User', body: 'Single comment' };

            mockedAxios.get.mockResolvedValue({ data: mockComment });

            const result = await commentsService.getComment(postId, commentId);

            expect(mockedAxios.get).toHaveBeenCalledWith(`${POSTS_BASE_URL}/posts/${postId}/comments/${commentId}`);
            expect(result.data).toEqual(mockComment);
        });
    });
});