import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Recipe from '../components/Recipe';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../utils/store';
import { GoogleGenerativeAI } from "@google/generative-ai";

// Mock the AI API
jest.mock('@google/generative-ai', () => ({
  GoogleGenerativeAI: jest.fn().mockImplementation(() => ({
    getGenerativeModel: () => ({
      startChat: () => ({
        sendMessage: jest.fn().mockResolvedValue({
          response: {
            text: jest.fn().mockReturnValue('Mocked AI Recipe Response'),
          }
        }),
      }),
    }),
  })),
}));

describe('Recipe Component', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear previous test mocks
  });

  it('renders correctly and displays loading shimmer', () => {
    render(
      <Provider store={store}>
        <Router>
          <Recipe />
        </Router>
      </Provider>
    );

    // Check if shimmer effect is displayed during loading
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('calls the AI API and displays the generated recipe', async () => {
    render(
      <Provider store={store}>
        <Router>
          <Recipe />
        </Router>
      </Provider>
    );

    // Wait for the API response to resolve
    await waitFor(() => {
      expect(screen.getByText(/mocked ai recipe response/i)).toBeInTheDocument();
    });
  });

  it('downloads the recipe as a text file', async () => {
    render(
      <Provider store={store}>
        <Router>
          <Recipe />
        </Router>
      </Provider>
    );

    // Wait for the AI response
    await waitFor(() => {
      expect(screen.getByText(/mocked ai recipe response/i)).toBeInTheDocument();
    });

    // Simulate clicking the "Download Recipe" button
    const downloadButton = screen.getByText(/Download Recipe/i);
    window.URL.createObjectURL = jest.fn(); // Mock createObjectURL
    fireEvent.click(downloadButton);

    // Verify that createObjectURL was called for download
    expect(window.URL.createObjectURL).toHaveBeenCalled();
  });

  it('toggles between adding and removing the recipe from the store', async () => {
    render(
      <Provider store={store}>
        <Router>
          <Recipe />
        </Router>
      </Provider>
    );

    // Wait for the AI response
    await waitFor(() => {
      expect(screen.getByText(/mocked ai recipe response/i)).toBeInTheDocument();
    });

    // Check if the button is initially for adding the recipe
    const toggleButton = screen.getByText(/Add to Recipe Store/i);
    fireEvent.click(toggleButton);

    // Check that it switches to removing the recipe after click
    expect(toggleButton.textContent).toBe('Remove from Recipe Store');
  });
});
