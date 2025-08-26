import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostCreate from '../PostCreate';
import postsService from '../../services/postsService';

jest.mock('../../services/postsService');

describe('PostCreate', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        global.alert = jest.fn();
    });

    it('should render all form fields', () => {
        render(<PostCreate />);

        expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/post/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/category/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/state/i)).toBeInTheDocument();
        expect(screen.getByText(/citation/i)).toBeInTheDocument();
    });

    it('should have category options', () => {
        render(<PostCreate />);

        const categorySelect = screen.getByLabelText(/category/i);
        expect(categorySelect).toBeInTheDocument();
        
        expect(screen.getByRole('option', { name: 'Musing Blockchain' })).toBeInTheDocument();
        expect(screen.getByRole('option', { name: 'A.I.Now.AI' })).toBeInTheDocument();
        expect(screen.getByRole('option', { name: 'WebDev Affairs' })).toBeInTheDocument();
    });

    it('should have citation checkboxes', () => {
        render(<PostCreate />);

        expect(screen.getByLabelText('Musing Blockchain')).toBeInTheDocument();
        expect(screen.getByLabelText('Sociology Now!')).toBeInTheDocument();
        expect(screen.getByLabelText('A.I.Now.AI')).toBeInTheDocument();
    });

    it('should handle citation checkbox selection', () => {
        render(<PostCreate />);

        const checkbox = screen.getByLabelText('Musing Blockchain');
        fireEvent.click(checkbox);

        expect(checkbox).toBeChecked();
    });

    it('should call postsService.createPost on form submission', async () => {
        postsService.createPost.mockResolvedValue({ data: { id: 123 } });

        render(<PostCreate />);

        fireEvent.change(screen.getByLabelText(/title/i), {
            target: { value: 'Test Post Title' }
        });
        fireEvent.change(screen.getByLabelText(/post/i), {
            target: { value: 'Test post content' }
        });

        const submitButton = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(postsService.createPost).toHaveBeenCalledWith(
                expect.objectContaining({
                    title: 'Test Post Title',
                    post: 'Test post content',
                    cat3: '',
                    blogcite: '',
                    state: 'published',
                    author: 'anonymous',
                    email: 'anonymous@gmail.com',
                    categoryId: 12
                })
            );
        });
    });

    it('should include selected citations in form submission', async () => {
        postsService.createPost.mockResolvedValue({ data: { id: 123 } });

        render(<PostCreate />);

        fireEvent.change(screen.getByLabelText(/title/i), {
            target: { value: 'Test Title' }
        });

        const checkbox1 = screen.getByLabelText('Musing Blockchain');
        const checkbox2 = screen.getByLabelText('A.I.Now.AI');
        
        fireEvent.click(checkbox1);
        fireEvent.click(checkbox2);

        const submitButton = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(postsService.createPost).toHaveBeenCalledWith(
                expect.objectContaining({
                    blogcite: 'Musing Blockchain, A.I.Now.AI'
                })
            );
        });
    });
});