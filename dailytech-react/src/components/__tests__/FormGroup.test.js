import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormGroup from '../FormGroup';

describe('FormGroup Component', () => {
    const mockHandleChange = jest.fn();
    const mockValues = { testField: 'test value' };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render input field by default', () => {
        render(
            <FormGroup
                label="Test Label"
                id="testField"
                values={mockValues}
                handleChange={mockHandleChange}
            />
        );

        expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
        expect(screen.getByDisplayValue('test value')).toBeInTheDocument();
    });

    it('should render textarea when type is textarea', () => {
        render(
            <FormGroup
                label="Description"
                id="testField"
                type="textarea"
                values={mockValues}
                handleChange={mockHandleChange}
            />
        );

        const textarea = screen.getByLabelText('Description');
        expect(textarea.tagName.toLowerCase()).toBe('textarea');
    });

    it('should render select when type is select', () => {
        render(
            <FormGroup
                label="Category"
                id="testField"
                type="select"
                values={mockValues}
                handleChange={mockHandleChange}
            >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
            </FormGroup>
        );

        const select = screen.getByLabelText('Category');
        expect(select.tagName.toLowerCase()).toBe('select');
        expect(screen.getByText('Option 1')).toBeInTheDocument();
        expect(screen.getByText('Option 2')).toBeInTheDocument();
    });

    it('should have required attribute when required prop is true', () => {
        render(
            <FormGroup
                label="Required Field"
                id="testField"
                values={mockValues}
                handleChange={mockHandleChange}
                required
            />
        );

        expect(screen.getByLabelText('Required Field')).toBeRequired();
    });

    it('should call handleChange on input change', () => {
        render(
            <FormGroup
                label="Test Input"
                id="testField"
                values={{ testField: '' }}
                handleChange={mockHandleChange}
            />
        );

        const input = screen.getByLabelText('Test Input');
        fireEvent.change(input, { target: { value: 'new value' } });

        expect(mockHandleChange).toHaveBeenCalled();
    });

    it('should set input type correctly', () => {
        render(
            <FormGroup
                label="Email Field"
                id="email"
                type="email"
                values={{ email: '' }}
                handleChange={mockHandleChange}
            />
        );

        const input = screen.getByLabelText('Email Field');
        expect(input).toHaveAttribute('type', 'email');
    });

    it('should pass additional props to input element', () => {
        render(
            <FormGroup
                label="Props Test"
                id="testField"
                values={mockValues}
                handleChange={mockHandleChange}
                placeholder="test placeholder"
            />
        );

        const input = screen.getByLabelText('Props Test');
        expect(input).toHaveAttribute('placeholder', 'test placeholder');
    });
});