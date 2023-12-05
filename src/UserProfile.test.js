import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserProfile from './UserProfile';
import UserService from './UserService';

jest.mock('./userService'); // Mock the userService

describe('UserProfile Component', () => {
    it('displays user name after fetching user data', async () => {
        // Mocking userService.getUser to resolve with a specific user's data
        UserService.getUser.mockResolvedValue({ username: 'User1' });

        render(<UserProfile userId="1" />); // Using userId "1" for the test

        // Waiting for the component to display the user's name
        await waitFor(() => screen.getByText(/Welcome, User1!/));

        // Assertion to check if the user's name is displayed correctly
        expect(screen.getByText(/Welcome, User1!/)).toBeInTheDocument();
    });
});
