import React, { Suspense, lazy ,useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter , RouterProvider ,Outlet } from "react-router-dom";
import Profile from "./components/Profile";
import UserContext from "./utils/useContext";

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [user, setUser] = useState({
      name: "Guest",
      email: "email.com",
  });
  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: (<Suspense fallback={<div>Loading...</div>}>
          <About />
          </Suspense>),
        children: [
          {
            path: "profile",
            element: <Profile/> ,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute} />);
