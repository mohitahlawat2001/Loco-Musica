import React, { Suspense, lazy ,useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
// import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter , RouterProvider ,Outlet } from "react-router-dom";
import Profile from "./components/Profile";
import UserContext from "./utils/useContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import Recipe from "./components/Recipe";
import RecipeStore from "./components/RecipeStore";
import Login from "./components/Login";
import { FallbackShimmer } from "./components/Shimmer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Import globally

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

const AppLayout = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState(false);
  return (
    <Provider store={store}>
    <UserContext.Provider value={{ name,setName, email,setEmail , login, setLogin  }}>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar />
      </UserContext.Provider>
      </Provider>
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
        element: (<Suspense fallback={<FallbackShimmer/>}>
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
        element: (<Suspense fallback={<FallbackShimmer/>}>
          <Contact />
          </Suspense>),
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },{
        path: "/recipe/:name",
        element: <Recipe />,
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/recipeStore",
        element: <RecipeStore/>
      },{
        path: "/login",
        element: <Login/>,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute} />);
