import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
// import RestaurantPage from "./components/RestaurantPage";

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

const About = lazy (() => import("./components/About"));
const RestaurantPage = lazy(()=> import("./components/RestaurantPage"));

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
                element: (
                    <Suspense fallback={<h1>Loading Screen...</h1>}>
                    <RestaurantPage />
                    </Suspense>
                )
            },
            {
                path:"/about",
                element: 
                    <Suspense fallback={<h1>Loading Screen...</h1>}>
                    <About />
                    </Suspense>
                
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