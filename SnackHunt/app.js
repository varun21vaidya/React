import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import {Body} from "./src/components/Body";

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
        <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />);