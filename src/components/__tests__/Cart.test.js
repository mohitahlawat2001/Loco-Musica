import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Cart from "../components/Cart";
import store from "../utils/store";
import { addToCart } from "../utils/cartSlice";

// Utility to render with Redux store
const renderWithProvider = (ui) => {
  return render(<Provider store={store}>{ui}</Provider>);
};

describe("Cart Component", () => {
  beforeEach(() => {
    store.dispatch({ type: "cart/clearCart" });
  });

  it("renders 'Your Cart is Empty' when the cart is empty", () => {
    renderWithProvider(<Cart />);

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });

  it("displays items in the cart", () => {
    const item = {
      card: {
        info: {
          id: "1",
          name: "Pizza",
          description: "Cheese Pizza",
          price: 10000,
          imageId: "pizza.jpg",
        },
      },
    };

    store.dispatch(addToCart(item));

    renderWithProvider(<Cart />);

    expect(screen.getByText(/Pizza/i)).toBeInTheDocument();
    expect(screen.getByText(/Cheese Pizza/i)).toBeInTheDocument();
    expect(screen.getByText(/Price: ₹100/i)).toBeInTheDocument();
  });

  it("increases and decreases the quantity of an item", () => {
    const item = {
      card: {
        info: {
          id: "1",
          name: "Pizza",
          description: "Cheese Pizza",
          price: 10000,
          imageId: "pizza.jpg",
        },
      },
    };

    store.dispatch(addToCart(item));

    renderWithProvider(<Cart />);

    const increaseButton = screen.getByText("+");
    const decreaseButton = screen.getByText("-");
    const quantityDisplay = screen.getByText("1");

    // Increase quantity
    fireEvent.click(increaseButton);
    expect(screen.getByText("2")).toBeInTheDocument();

    // Decrease quantity
    fireEvent.click(decreaseButton);
    expect(screen.getByText("1")).toBeInTheDocument();

    // Can't decrease below 1
    fireEvent.click(decreaseButton);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("clears the cart when 'Clear Cart' is clicked", () => {
    const item = {
      card: {
        info: {
          id: "1",
          name: "Pizza",
          description: "Cheese Pizza",
          price: 10000,
          imageId: "pizza.jpg",
        },
      },
    };

    store.dispatch(addToCart(item));

    renderWithProvider(<Cart />);

    const clearButton = screen.getByText(/Clear Cart/i);
    fireEvent.click(clearButton);

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });

  it("removes an item from the cart", () => {
    const item = {
      card: {
        info: {
          id: "1",
          name: "Pizza",
          description: "Cheese Pizza",
          price: 10000,
          imageId: "pizza.jpg",
        },
      },
    };

    store.dispatch(addToCart(item));

    renderWithProvider(<Cart />);

    const removeButton = screen.getByText(/Remove/i);
    fireEvent.click(removeButton);

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });

  it("displays the total price of items in the cart", () => {
    const item1 = {
      card: {
        info: {
          id: "1",
          name: "Pizza",
          price: 10000,
        },
      },
    };
    const item2 = {
      card: {
        info: {
          id: "2",
          name: "Burger",
          price: 5000,
        },
      },
    };

    store.dispatch(addToCart(item1));
    store.dispatch(addToCart(item2));

    renderWithProvider(<Cart />);

    expect(screen.getByText(/Total: ₹150/i)).toBeInTheDocument();
  });
});
