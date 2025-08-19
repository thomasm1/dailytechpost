import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../Form';

describe('Form Component', () => {
    const mockOnSubmit = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render form with initial values', () => {
        const initialValues = { name: 'Initial Name', email: 'test@example.com' };

        render(
            <Form initialValues={initialValues} onSubmit={mockOnSubmit}>
                {({ values }) => (
                    <div>
                        <span data-testid="name-value">{values.name}</span>
                        <span data-testid="email-value">{values.email}</span>
                    </div>
                )}
            </Form>
        );

        expect(screen.getByTestId('name-value')).toHaveTextContent('Initial Name');
        expect(screen.getByTestId('email-value')).toHaveTextContent('test@example.com');
    });

    it('should call onSubmit when form is submitted', () => {
        const initialValues = { title: 'Test Title' };

        render(
            <Form initialValues={initialValues} onSubmit={mockOnSubmit}>
                {({ values, handleChange }) => (
                    <div>
                        <input 
                            data-testid="title-input"
                            value={values.title}
                            onChange={handleChange}
                            name="title"
                        />
                    </div>
                )}
            </Form>
        );

        fireEvent.click(screen.getByRole('button', { name: /submit/i }));

        expect(mockOnSubmit).toHaveBeenCalledWith(initialValues);
    });

    it('should handle input value updates', () => {
        const initialValues = { message: '' };

        render(
            <Form initialValues={initialValues} onSubmit={mockOnSubmit}>
                {({ values, handleChange }) => (
                    <div>
                        <input 
                            data-testid="message-input"
                            name="message"
                            value={values.message}
                            onChange={handleChange}
                        />
                        <span data-testid="message-display">{values.message}</span>
                    </div>
                )}
            </Form>
        );

        const input = screen.getByTestId('message-input');
        fireEvent.change(input, { target: { value: 'New message' } });

        expect(screen.getByTestId('message-display')).toHaveTextContent('New message');
    });
});