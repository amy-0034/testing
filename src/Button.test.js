import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
describe('Button Component', () => {
    it('renders the button with a label', () => {
        render(<Button label="Click Me" />);
        expect(screen.getByText('Click Me')).toBeInTheDocument();
    });
    it('calls the onClick handler when clicked', () => {
        const handleClick = jest.fn();
        render(<Button label="Click Me" onClick={handleClick} />);
        fireEvent.click(screen.getByText('Click Me'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
