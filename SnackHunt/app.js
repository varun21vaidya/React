import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantPage from "./src/components/RestaurantPage";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Hotel Card Container
 *      - Hotel Card
 *          - image, name, stars, cuisine, delivery time
 *  Footer
 *  - copyright
 *  - links
 *  - address
 *  - contact
 */


const AppLayout = ()=>{
    return (
        <div className="app">
        <Header />
        <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path:"/",
                element: <Body />
            },
            {
                path:"/restaurant/:resId",
                element: <RestaurantPage />
            },
            {
                path:"/about",
                element: <About />
            },
            {
                path:"/contact",
                element: <Contact />
            },
        ]
    },

])

  
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />);