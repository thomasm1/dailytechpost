import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import CommentCreate from '../CommentCreate';
import commentsService from '../../services/commentsService';

jest.mock('../../services/commentsService');

describe('CommentCreate', () => {
    const mockPostId = 1;

    beforeEach(() => {
        jest.clearAllMocks();
        global.alert = jest.fn();
        jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    it('should render all form fields', () => {
        render(<CommentCreate postId={mockPostId} />);

        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/comment/i)).toBeInTheDocument();
    });

    it('should have required fields marked as required', () => {
        render(<CommentCreate postId={mockPostId} />);

        expect(screen.getByLabelText(/name/i)).toBeRequired();
        expect(screen.getByLabelText(/email/i)).toBeRequired();
        expect(screen.getByLabelText(/comment/i)).toBeRequired();
    });

    it('should have email field with email type', () => {
        render(<CommentCreate postId={mockPostId} />);

        const emailField = screen.getByLabelText(/email/i);
        expect(emailField).toHaveAttribute('type', 'email');
    });

    it('should call commentsService.addComment on form submission', async () => {
        commentsService.addComment.mockResolvedValue({});

        render(<CommentCreate postId={mockPostId} />);

        fireEvent.change(screen.getByLabelText(/name/i), {
            target: { value: 'John Doe' }
        });
        fireEvent.change(screen.getByLabelText(/email/i), {
            target: { value: 'john@example.com' }
        });
        fireEvent.change(screen.getByLabelText(/comment/i), {
            target: { value: 'Great post!' }
        });

        const submitButton = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(commentsService.addComment).toHaveBeenCalledWith(
                {
                    name: 'John Doe',
                    email: 'john@example.com',
                    body: 'Great post!'
                },
                mockPostId
            );
            expect(global.alert).toHaveBeenCalledWith('Comment created successfully!');
        });
    });

    it('should handle comment creation error', async () => {
        const consoleError = jest.spyOn(console, 'error').mockImplementation();
        commentsService.addComment.mockRejectedValue(new Error('API Error'));

        render(<CommentCreate postId={mockPostId} />);

        fireEvent.change(screen.getByLabelText(/name/i), {
            target: { value: 'Test User' }
        });
        fireEvent.change(screen.getByLabelText(/email/i), {
            target: { value: 'test@test.com' }
        });
        fireEvent.change(screen.getByLabelText(/comment/i), {
            target: { value: 'Test comment' }
        });

        const submitButton = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(consoleError).toHaveBeenCalledWith('Error creating comment:', expect.any(Error));
            expect(global.alert).toHaveBeenCalledWith('Error creating comment. Please check the console for details.');
        });

        consoleError.mockRestore();
    });
});