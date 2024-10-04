// Login.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For better assertions
import Login from './Login'; // Adjust path based on your project structure
import UserContext from '../utils/useContext'; // Adjust path based on your project structure
import { useNavigate } from 'react-router-dom';

// Mock useNavigate from react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Login Component', () => {
  const mockSetUser = jest.fn();
  const mockNavigate = jest.fn();

  beforeEach(() => {
    // Mock useNavigate
    useNavigate.mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('updates form fields correctly', () => {
    render(
      <UserContext.Provider value={{ user: {}, setUser: mockSetUser }}>
        <Login />
      </UserContext.Provider>
    );

    // Simulate typing into the name, email, and password fields
    fireEvent.change(screen.getByPlaceholderText(/Enter Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText(/Enter Email Address/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Enter Password/i), { target: { value: 'password123' } });

    // Assert that the fields have the correct values
    expect(screen.getByPlaceholderText(/Enter Name/i)).toHaveValue('John Doe');
    expect(screen.getByPlaceholderText(/Enter Email Address/i)).toHaveValue('john.doe@example.com');
    expect(screen.getByPlaceholderText(/Enter Password/i)).toHaveValue('password123');
  });

  test('submits form and updates user context', () => {
    render(
      <UserContext.Provider value={{ user: {}, setUser: mockSetUser }}>
        <Login />
      </UserContext.Provider>
    );

    // Simulate form submission
    fireEvent.change(screen.getByPlaceholderText(/Enter Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText(/Enter Email Address/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Enter Password/i), { target: { value: 'password123' } });
    fireEvent.click(screen.getByText(/Login/i));

    // Assert that setUser was called with the correct data
    expect(mockSetUser).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      login: true,
    });

    // Assert that navigation was called
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
