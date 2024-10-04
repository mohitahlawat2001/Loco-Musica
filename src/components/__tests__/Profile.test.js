// Profile.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For better assertions
import Profile from './Profile'; // Adjust the path based on your project structure
import UserContext from '../utils/useContext'; // Adjust the path based on your project structure

describe('Profile Component', () => {
  test('renders user name and email from context', () => {
    // Mock user data for context
    const mockUser = {
      name: 'John Doe',
      email: 'john.doe@example.com',
    };

    // Render the Profile component with UserContext.Provider
    render(
      <UserContext.Provider value={{ user: mockUser }}>
        <Profile />
      </UserContext.Provider>
    );

    // Check that the user's name and email are displayed
    expect(screen.getByText(/Name:/i)).toHaveTextContent('Name: John Doe');
    expect(screen.getByText(/Email:/i)).toHaveTextContent('Email: john.doe@example.com');
  });
});
