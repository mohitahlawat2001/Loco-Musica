import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Body from "../components/Body";
import { swiggyApi } from "../Constants";
import Shimmer from "../components/Shimmer";

// Mock fetch for the API call
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data: {
          cards: [
            {
              card: {
                card: {
                  gridElements: {
                    infoWithStyle: {
                      restaurants: [
                        {
                          info: {
                            id: "1",
                            name: "Restaurant A",
                            cuisines: ["Italian"],
                            avgRating: "4.5",
                          },
                        },
                        {
                          info: {
                            id: "2",
                            name: "Restaurant B",
                            cuisines: ["Mexican"],
                            avgRating: "4.0",
                          },
                        },
                      ],
                    },
                  },
                },
              },
            },
          ],
        },
      }),
  })
);

describe("Body Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("displays Shimmer while fetching data", async () => {
    render(<Body />);

    // Expect shimmer to be in the document before data is loaded
    expect(screen.getByTestId("shimmer")).toBeInTheDocument();

    // Wait for the restaurants to load
    await waitFor(() => expect(screen.queryByTestId("shimmer")).toBeNull());
  });

  it("fetches and displays the restaurants", async () => {
    render(<Body />);

    // Wait for the restaurants to be fetched and displayed
    await waitFor(() => expect(screen.getByTestId("res-list")).toBeInTheDocument());

    // Check if restaurants are rendered
    expect(screen.getByText(/Restaurant A/i)).toBeInTheDocument();
    expect(screen.getByText(/Restaurant B/i)).toBeInTheDocument();
  });

  it("filters restaurants based on search input", async () => {
    render(<Body />);

    // Wait for the restaurants to load
    await waitFor(() => expect(screen.getByTestId("res-list")).toBeInTheDocument());

    // Type in the search input
    fireEvent.change(screen.getByTestId("search-input"), {
      target: { value: "Restaurant A" },
    });

    // Click the search button
    fireEvent.click(screen.getByTestId("search-btn"));

    // Check if filtered restaurant is displayed
    expect(screen.getByText(/Restaurant A/i)).toBeInTheDocument();

    // Check if the non-matching restaurant is not displayed
    expect(screen.queryByText(/Restaurant B/i)).toBeNull();
  });

  it("displays an error message when no restaurants match the search", async () => {
    render(<Body />);

    // Wait for the restaurants to load
    await waitFor(() => expect(screen.getByTestId("res-list")).toBeInTheDocument());

    // Type in the search input with no matching restaurant
    fireEvent.change(screen.getByTestId("search-input"), {
      target: { value: "Non-existent Restaurant" },
    });

    // Click the search button
    fireEvent.click(screen.getByTestId("search-btn"));

    // Check for the error message
    expect(screen.getByText(/No results found/i)).toBeInTheDocument();
  });

  it("displays an error message if the search input is empty", async () => {
    render(<Body />);

    // Wait for the restaurants to load
    await waitFor(() => expect(screen.getByTestId("res-list")).toBeInTheDocument());

    // Clear the search input
    fireEvent.change(screen.getByTestId("search-input"), {
      target: { value: "" },
    });

    // Click the search button
    fireEvent.click(screen.getByTestId("search-btn"));

    // Check for the error message
    expect(screen.getByText(/Please enter a valid search/i)).toBeInTheDocument();
  });
});
