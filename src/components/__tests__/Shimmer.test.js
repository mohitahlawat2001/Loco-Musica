import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {
  CardShimmer,
  Shimmer,
  RestaurantShimmer,
  MenuShimmer,
  RecipeShimmer,
  FallbackShimmer,
} from './Shimmer'; // Adjust the import path according to your project structure

describe('Shimmer Components', () => {
  test('renders CardShimmer', () => {
    render(<CardShimmer />);
    const shimmerElement = screen.getByRole('article', { hidden: true });
    expect(shimmerElement).toBeInTheDocument();
    expect(shimmerElement).toHaveClass('border border-blue-300 shadow rounded-md p-2 w-64 m-2');
  });

  test('renders Shimmer with multiple CardShimmer', () => {
    render(<Shimmer />);
    const shimmerElements = screen.getAllByTestId('shimmer');
    expect(shimmerElements.length).toBe(20);
  });

  test('renders RestaurantShimmer', () => {
    render(<RestaurantShimmer />);
    const restaurantShimmerElement = screen.getByText(/Close Time/i);
    expect(restaurantShimmerElement).toBeInTheDocument();
  });

  test('renders MenuShimmer', () => {
    render(<MenuShimmer />);
    const menuItems = screen.getAllByRole('listitem');
    expect(menuItems.length).toBe(9);
  });

  test('renders RecipeShimmer', () => {
    render(<RecipeShimmer />);
    const recipeShimmerElement = screen.getByText(/bg-gradient-to-r/i);
    expect(recipeShimmerElement).toBeInTheDocument();
  });

  test('renders FallbackShimmer', () => {
    render(<FallbackShimmer />);
    const fallbackElements = screen.getAllByRole('presentation');
    expect(fallbackElements.length).toBeGreaterThan(0);
  });
});
