import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import CategoryCreate from '../CategoryCreate';
import newsService from '../../services/newsService';

jest.mock('../../services/newsService');

describe('CategoryCreate', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        global.alert = jest.fn();
    });

    it('should render all form fields', () => {
        render(<CategoryCreate />);

        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/news/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/url/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    });

    it('should have name field marked as required', () => {
        render(<CategoryCreate />);

        expect(screen.getByLabelText(/name/i)).toBeRequired();
    });

    it('should have description as textarea', () => {
        render(<CategoryCreate />);

        const descriptionField = screen.getByLabelText(/description/i);
        expect(descriptionField.tagName.toLowerCase()).toBe('textarea');
    });

    it('should call newsService.createCategory on form submission', async () => {
        newsService.createCategory.mockResolvedValue({});

        render(<CategoryCreate />);

        fireEvent.change(screen.getByLabelText(/name/i), {
            target: { value: 'New Tech Category' }
        });
        fireEvent.change(screen.getByLabelText(/description/i), {
            target: { value: 'Latest technology news and updates' }
        });

        const submitButton = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(newsService.createCategory).toHaveBeenCalledWith(
                expect.objectContaining({
                    name: 'New Tech Category',
                    description: 'Latest technology news and updates',
                    news: [
                        {
                            id: 42,
                            title: 'Tech Giant Merges',
                            url: 'https://news3.com'
                        }
                    ]
                })
            );
            expect(global.alert).toHaveBeenCalledWith('Research URL added successfully!');
        });
    });

    it('should handle form submission error', async () => {
        const consoleError = jest.spyOn(console, 'error').mockImplementation();
        newsService.createCategory.mockRejectedValue(new Error('API Error'));

        render(<CategoryCreate />);

        fireEvent.change(screen.getByLabelText(/name/i), {
            target: { value: 'Test Category' }
        });

        const submitButton = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(consoleError).toHaveBeenCalledWith('Error adding URL:', expect.any(Error));
            expect(global.alert).toHaveBeenCalledWith('Error adding URL. Please check the console for details.');
        });

        consoleError.mockRestore();
    });

    it('should initialize with default news data', () => {
        render(<CategoryCreate />);

        const submitButton = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(submitButton);

        expect(newsService.createCategory).toHaveBeenCalledWith(
            expect.objectContaining({
                news: [
                    {
                        id: 42,
                        title: 'Tech Giant Merges',
                        url: 'https://news3.com'
                    }
                ]
            })
        );
    });
});