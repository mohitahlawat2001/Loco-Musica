import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import RestaurantCard from "../components/RestaurantCard";
import { IMG_URL } from "../Constants";

// Mock data for the test
const mockProps = {
  id: "1",
  name: "Test Restaurant",
  cuisines: ["Italian", "Chinese"],
  city: "Test City",
  area: "Test Area",
  cloudinaryImageId: "sample-image-id",
  avgRating: 4.5,
};

describe("RestaurantCard Component", () => {

  const renderWithRouter = (ui) => {
    return render(<Router>{ui}</Router>);
  };

  it("renders RestaurantCard component with the correct details", () => {
    renderWithRouter(<RestaurantCard {...mockProps} />);

    // Check if restaurant name is displayed
    const restaurantName = screen.getByText(/Test Restaurant/i);
    expect(restaurantName).toBeInTheDocument();

    // Check if cuisines are displayed
    const cuisinesText = screen.getByText(/Italian, Chinese/i);
    expect(cuisinesText).toBeInTheDocument();

    // Check if city and area are displayed
    const cityText = screen.getByText(/Test City/i);
    const areaText = screen.getByText(/Test Area/i);
    expect(cityText).toBeInTheDocument();
    expect(areaText).toBeInTheDocument();

    // Check if the rating is displayed
    const rating = screen.getByText(/4.5/i);
    expect(rating).toBeInTheDocument();
  });

  it("renders the restaurant image with correct src and alt", () => {
    renderWithRouter(<RestaurantCard {...mockProps} />);

    const image = screen.getByAltText(/restaurant/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", `${IMG_URL}${mockProps.cloudinaryImageId}`);
  });

  it("links to the correct restaurant page", () => {
    renderWithRouter(<RestaurantCard {...mockProps} />);

    const linkElement = screen.getByRole("link", { name: /Test Restaurant/i });
    expect(linkElement).toHaveAttribute("href", `/restaurant/${mockProps.id}`);
  });

  it("displays the correct rating icon", () => {
    renderWithRouter(<RestaurantCard {...mockProps} />);

    const starIcon = screen.getByRole("img", { hidden: true }); // The star icon is rendered as an SVG
    expect(starIcon).toBeInTheDocument();
    expect(starIcon).toHaveAttribute("viewBox", "0 0 20 20"); // To ensure it's rendering the correct star icon
  });
});
