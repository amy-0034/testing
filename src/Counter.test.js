import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
    it('increments count on button click', () => {
        render(<Counter />);
        fireEvent.click(screen.getByText('Increment'));
        expect(screen.getByText('Count: 1')).toBeInTheDocument();
    });
});
