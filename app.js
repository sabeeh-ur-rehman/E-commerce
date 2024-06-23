import React from "react";
import ReactDom from "react-dom";
import "@fontsource/poppins";
import Contact from "./src/components/contact/Contact";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Error from "./src/components/Error";
import Signup from "./src/components/signup/Signup";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/about/About";
import Login from "./src/components/signup/Login";
import Home from "./src/components/home/Home";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Allproducts from "./src/components/home/Allproducts";

export const Layout = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        errorElement: <Error />,
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        errorElement: <Error />,
        element: <About />,
      },
      {
        path: "/signup",
        errorElement: <Error />,
        element: <Signup />,
      },
      {
        path: "/login",
        errorElement: <Error />,
        element: <Login />,
      },
      {
        path: "/Allproducts",
        errorElement: <Error />,
        element: <Allproducts/>,
      },
    ],
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
