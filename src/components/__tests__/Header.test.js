import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
test("Logo should load on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  // Check if logo is loaded
  const logo = header.getAllByTestId("logo");
  expect(logo[0].src).toBe("https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png");
});
test("Online Status should be green on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  // Check if logo is loaded
  const onlineStatus = header.getByTestId("online-status");
  expect(onlineStatus.innerHTML).toBe("<div class=\"border mx-80 bg-green-400 rounded-md h-2  \"></div>");
});
test("Cart should have 0 items on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  // Check if logo is loaded
  const cart = header.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart - 0");
});