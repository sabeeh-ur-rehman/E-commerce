import React from "react";
import ReactDOM from "react-dom";
import { Toaster } from "react-hot-toast";
import "@fontsource/poppins";
import Contact from "./src/components/contact/Contact";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Error from "./src/components/Error";
import Signup from "./src/components/signup/Signup";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/about/About.js";
import Login from "./src/components/signup/Login.js";
import Home from "./src/components/home/Home";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Allproducts from "./src/components/home/Allproducts";
import Cart from "./src/components/cart/Cart";
import Wishlist from "./src/components/Wishlist/Wishlist";
import { ScrollRestoration } from "react-router-dom";
import ProductDetail from "./src/components/home/Productdetail";
import Success from "./src/components/home/Success.js";
import RouteProtect from "./src/components/routeProtect.js";
import UploadProduct from "./src/components/upload/UploadProducts.js";

export const Layout = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <ScrollRestoration />
        <Outlet />
        <Toaster position="top-right" />
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
        element: <Allproducts />,
      },
      {
        path: "/cart",
        errorElement: <Error />,
        element: <RouteProtect component={Cart} />,
      },
      {
        path: "/wishlist",
        errorElement: <Error />,
        element: <RouteProtect component={Wishlist} />,
      },
      {
        path: "/product/:id/:slug",
        errorElement: <Error />,
        element: <ProductDetail />,
      },
      {
        path: "/success",
        errorElement: <Error />,
        element: <Success />,
      },
      {
        path: "/upload",
        errorElement: <Error />,
        element: <UploadProduct />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
