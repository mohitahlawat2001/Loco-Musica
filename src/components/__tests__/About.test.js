import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";  // To simulate router behavior
import About from "../components/About";
import UserContext from "../utils/useContext";

// Mocking the context value for testing
const mockUserContext = {
  user: {
    name: "John Doe"
  }
};

describe("About Component", () => {
  it("renders the 'Profile' button and toggles the link correctly", () => {
    render(
      <MemoryRouter>
        <UserContext.Provider value={mockUserContext}>
          <About />
        </UserContext.Provider>
      </MemoryRouter>
    );

    // Check if the 'Profile' button is rendered
    const profileButton = screen.getByRole("button", { name: /Profile/i });
    expect(profileButton).toBeInTheDocument();

    // Initial state - check if Link points to '/about/profile'
    expect(screen.getByRole("link", { name: /Profile/i })).toHaveAttribute("href", "/about/profile");

    // Click the button to toggle the link
    fireEvent.click(profileButton);

    // Check if the Link toggles to '/about'
    expect(screen.getByRole("link", { name: /Profile/i })).toHaveAttribute("href", "/about");

    // Click the button again to toggle back
    fireEvent.click(profileButton);

    // Check if the Link toggles back to '/about/profile'
    expect(screen.getByRole("link", { name: /Profile/i })).toHaveAttribute("href", "/about/profile");
  });

  it("displays the correct user name from the context", () => {
    render(
      <MemoryRouter>
        <UserContext.Provider value={mockUserContext}>
          <About />
        </UserContext.Provider>
      </MemoryRouter>
    );

    // Check if the correct user name is displayed
    const welcomeMessage = screen.getByText(/Welcome John Doe/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  it("renders the mascot image", () => {
    render(
      <MemoryRouter>
        <UserContext.Provider value={mockUserContext}>
          <About />
        </UserContext.Provider>
      </MemoryRouter>
    );

    // Check if the mascot image is rendered
    const mascotImage = screen.getByAltText("Loco Musica");
    expect(mascotImage).toBeInTheDocument();
  });

  it("renders 'Contact' button with correct link", () => {
    render(
      <MemoryRouter>
        <UserContext.Provider value={mockUserContext}>
          <About />
        </UserContext.Provider>
      </MemoryRouter>
    );

    // Check if the 'Contact' link is rendered with the correct href
    const contactLink = screen.getByRole("link", { name: /Contact/i });
    expect(contactLink).toHaveAttribute("href", "/contact");
  });
});
