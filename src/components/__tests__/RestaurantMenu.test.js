import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import RestanurantMenu from "../components/RestanurantMenu";
import { useRestaurant } from "../utils/useRestaurant";
import { addToCart } from "../utils/cartSlice";

// Mock useRestaurant hook
jest.mock("../utils/useRestaurant");

// Mock FontAwesomeIcon
jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: () => <i className="fa" />
}));

// Create a mock Redux store
const mockStore = configureStore([]);

describe("RestanurantMenu Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      cart: {
        items: [],
      },
    });
  });

  it("displays shimmer components when data is loading", () => {
    // Mock useRestaurant hook to return null (loading state)
    useRestaurant.mockReturnValue({ restaurant: null, menu: null });

    render(
      <Provider store={store}>
        <Router>
          <RestanurantMenu />
        </Router>
      </Provider>
    );

    // Check that shimmer components are displayed
    expect(screen.getByText(/loading restaurant.../i)).toBeInTheDocument();
    expect(screen.getByText(/loading menu.../i)).toBeInTheDocument();
  });

  it("renders restaurant and menu data correctly", () => {
    // Mock useRestaurant hook to return restaurant and menu data
    useRestaurant.mockReturnValue({
      restaurant: {
        id: "1",
        name: "Test Restaurant",
        cloudinaryImageId: "sample-image-id",
        cuisines: ["Italian", "Chinese"],
        city: "Test City",
        areaName: "Test Area",
        costForTwoMessage: "Cost for two: $30",
        avgRating: 4.5,
        totalRatingsString: "500+ ratings",
        availability: {
          nextCloseTime: "10:00 PM",
          nextOpenTime: "10:00 AM",
        },
      },
      menu: {
        1: { card: { info: { id: "1", name: "Pizza", description: "Delicious pizza", price: 100 } } },
        2: { card: { info: { id: "2", name: "Burger", description: "Tasty burger", price: 50 } } },
      },
    });

    render(
      <Provider store={store}>
        <Router>
          <RestanurantMenu />
        </Router>
      </Provider>
    );

    // Check if restaurant details are rendered
    expect(screen.getByText(/Test Restaurant/i)).toBeInTheDocument();
    expect(screen.getByText(/Italian, Chinese/i)).toBeInTheDocument();
    expect(screen.getByText(/Test City/i)).toBeInTheDocument();
    expect(screen.getByText(/Cost for two: \$30/i)).toBeInTheDocument();
    expect(screen.getByText(/4.5/i)).toBeInTheDocument();

    // Check if menu items are rendered
    expect(screen.getByText(/Pizza/i)).toBeInTheDocument();
    expect(screen.getByText(/Delicious pizza/i)).toBeInTheDocument();
    expect(screen.getByText(/100/i)).toBeInTheDocument();

    expect(screen.getByText(/Burger/i)).toBeInTheDocument();
    expect(screen.getByText(/Tasty burger/i)).toBeInTheDocument();
    expect(screen.getByText(/50/i)).toBeInTheDocument();
  });

  it("adds items to the cart", () => {
    // Mock useRestaurant hook to return restaurant and menu data
    useRestaurant.mockReturnValue({
      restaurant: {
        id: "1",
        name: "Test Restaurant",
        cloudinaryImageId: "sample-image-id",
        cuisines: ["Italian", "Chinese"],
        city: "Test City",
        areaName: "Test Area",
        costForTwoMessage: "Cost for two: $30",
        avgRating: 4.5,
        totalRatingsString: "500+ ratings",
        availability: {
          nextCloseTime: "10:00 PM",
          nextOpenTime: "10:00 AM",
        },
      },
      menu: {
        1: { card: { info: { id: "1", name: "Pizza", description: "Delicious pizza", price: 100 } } },
        2: { card: { info: { id: "2", name: "Burger", description: "Tasty burger", price: 50 } } },
      },
    });

    store = mockStore({
      cart: {
        items: [],
      },
    });

    render(
      <Provider store={store}>
        <Router>
          <RestanurantMenu />
        </Router>
      </Provider>
    );

    // Check if "Add to Cart" button works
    const addToCartButton = screen.getAllByTestId("addBtn")[0];
    fireEvent.click(addToCartButton);

    const actions = store.getActions();
    expect(actions).toContainEqual({
      type: addToCart.type,
      payload: {
        card: { info: { id: "1", name: "Pizza", description: "Delicious pizza", price: 100 } },
      },
    });
  });

  it("displays 'View Recipe' link correctly", () => {
    useRestaurant.mockReturnValue({
      restaurant: {
        id: "1",
        name: "Test Restaurant",
      },
      menu: {
        1: { card: { info: { id: "1", name: "Pizza", description: "Delicious pizza", price: 100 } } },
      },
    });

    render(
      <Provider store={store}>
        <Router>
          <RestanurantMenu />
        </Router>
      </Provider>
    );

    const viewRecipeLink = screen.getByText(/view recipe/i);
    expect(viewRecipeLink).toHaveAttribute("href", "/recipe/Pizza");
  });

  it("loads more menu items when 'Load More' button is clicked", () => {
    useRestaurant.mockReturnValue({
      restaurant: {
        id: "1",
        name: "Test Restaurant",
      },
      menu: {
        1: { card: { info: { id: "1", name: "Pizza", description: "Delicious pizza", price: 100 } } },
        2: { card: { info: { id: "2", name: "Burger", description: "Tasty burger", price: 50 } } },
        3: { card: { info: { id: "3", name: "Pasta", description: "Creamy pasta", price: 70 } } },
      },
    });

    render(
      <Provider store={store}>
        <Router>
          <RestanurantMenu />
        </Router>
      </Provider>
    );

    // Check if "Load More" button is visible and works
    const loadMoreButton = screen.getByRole("button", { name: /fa-chevron-down/i });
    expect(loadMoreButton).toBeInTheDocument();
    fireEvent.click(loadMoreButton);

    // Ensure that more items are loaded
    expect(screen.getByText(/Pasta/i)).toBeInTheDocument();
  });
});
