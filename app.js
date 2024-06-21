import React from "react";
import ReactDom from "react-dom"
import '@fontsource/poppins'; 
import Sidebar from "./src/components/home/Sidebar"
import Contact from "./src/components/contact/Contact"
import Header from "./src/components/Header"
import Footer from "./src/components/Footer"
import Error from "./src/components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/about/About";



export const Layout = () => {
    return (
      <>
        <Header />
        <Outlet/>
        <Footer />
      </>
    );
  };
  
  
  const appRouter = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout/>,
        children : [ 
          { 
            path: "/",
            errorElement:<Error/> ,
            element:<Sidebar/>
          },
          { 
            path: "/contact",
            element:<Contact/>
        
          },
          { 
            path: "/about",
            errorElement:<Error/> ,
            element:<About/>
        
          },
          { 
            path: "/signup",
            errorElement:<Error/>,
            element:<About/>

            
          },
        ]
     }
    ]
  )






const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);