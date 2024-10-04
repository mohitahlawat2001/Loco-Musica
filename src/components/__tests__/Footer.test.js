// Footer.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For better assertions
import Footer from './Footer';  // Adjust the import path based on your project structure
import UserContext from '../utils/useContext';  // Adjust the import path based on your project structure

describe('Footer Component', () => {
  test('renders footer with user information', () => {
    // Mock user data
    const mockUser = {
      name: 'John Doe',
      email: 'john.doe@example.com',
    };

    // Render the component with UserContext.Provider
    render(
      <UserContext.Provider value={{ user: mockUser }}>
        <Footer />
      </UserContext.Provider>
    );

    // Assert that the footer contains the correct user information
    expect(screen.getByText('Welcome John Doe!')).toBeInTheDocument();
    expect(screen.getByText('Email: john.doe@example.com')).toBeInTheDocument();
    expect(screen.getByText(/Loco Musica: Food & Tunes in Harmony/i)).toBeInTheDocument();
    expect(screen.getByText(/© 2024 Loco Musica. All rights reserved./i)).toBeInTheDocument();
  });

  test('renders footer with default layout', () => {
    // Render the component with a different mock user
    const mockUser = {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
    };

    render(
      <UserContext.Provider value={{ user: mockUser }}>
        <Footer />
      </UserContext.Provider>
    );

    // Assert that the footer renders as expected for a different user
    expect(screen.getByText('Welcome Jane Doe!')).toBeInTheDocument();
    expect(screen.getByText('Email: jane.doe@example.com')).toBeInTheDocument();
  });
});
