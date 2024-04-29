import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store.js";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});
test("Shimmer should load on Homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const shimmer = body.getByTestId("shimmer");
  expect(shimmer.children.length).toBe(10);
  console.log(shimmer);
});
test("Restaurants should load on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("search-btn")));
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(20);
  //console.log(shimmer);
});
test("Search for string(food) on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("search-btn")));
  const input = body.getByTestId("search-input");
  fireEvent.change(input, {
    target: {
      value: "bur",
    },
  });
  const searchBtn = body.getByTestId("search-btn");
  fireEvent.click(searchBtn);
    const resList = body.getByTestId("res-list");
    console.log(resList);
  expect(resList.children.length).toBe(2);
});