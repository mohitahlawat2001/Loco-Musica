// Contact.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For better assertions
import Contact from './Contact';  // Adjust the import path based on where your Contact component is located

describe('Contact Component', () => {
  test('renders the contact form with all inputs', () => {
    render(<Contact />);

    // Check if all form elements are rendered correctly
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByText(/send message/i)).toBeInTheDocument();
  });

  test('handles form input correctly', () => {
    render(<Contact />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);

    // Simulate typing into the form inputs
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello, this is a test message.' } });

    // Verify the values in the inputs
    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john@example.com');
    expect(messageInput.value).toBe('Hello, this is a test message.');
  });

  test('submit button triggers mailto link', () => {
    render(<Contact />);

    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByText(/send message/i);

    // Fill the form fields
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Test message' } });

    // Simulate form submission
    fireEvent.click(submitButton);

    // Test that the mailto link is being generated (in a real test environment, window.location would be tested)
    expect(window.location.href).toBe(
      'mailto:mohitahlawat.2001.ma@gmail.com?subject=Contact&body=Email: john@example.com, Message: Test message'
    );
  });
});
