// replace fetch with our fetch method, as testing doesnot have all browser features.
global.fetch =  jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MockData);
        }
    })
})
import {fireEvent, render, screen,waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import MockData from "../MockData/FullData.json"
import { BrowserRouter, json } from "react-router-dom";
import Body from "../Body";

describe("Body Component Testing", ()=>{

    // beforeAll(()=>{
    //     console.log("beforeAll");
    // })

    // beforeEach(()=>{
    //     console.log("beforeEach");
    // })
    
    // afterAll(()=>{
    //     console.log("afterAll");
    // })

    // afterEach(()=>{
    //     console.log("afterEach");
    // })

    test("testing search functionality",async ()=>{
        render(
            <BrowserRouter>
            <Body />
            </BrowserRouter>
        )
        await waitFor(()=>{
            // screen.debug(); // This will print the current DOM so you can inspect it
            // const searchInput = screen.getByPlaceholderText("Search Restaurants");
            const searchInput = screen.getByTestId("SearchInput");
            expect(searchInput).toBeInTheDocument();

            const cardsBeforeSearch = screen.getAllByTestId("hotelCardShow");
            // console.log("cardsBeforeSearch.length",cardsBeforeSearch.length);
            expect(cardsBeforeSearch.length).toBe(20);

            fireEvent.change(searchInput, {target : {value : "pizza"}});
            const cards = screen.getAllByTestId("hotelCardShow");
            // console.log("cards.length",cards.length);
            expect(cards.length).toBe(4);
        })
    })

    test("testing top rated functionality",async ()=>{

        render(
            <BrowserRouter>
            <Body />
            </BrowserRouter>
        )
        await waitFor(()=>{
            const topRated= screen.getByRole("button", {name: "Top Rated Restaurants"})
            // console.log("topRated",topRated)
            fireEvent.click(topRated);
            const topRatedCards= screen.getAllByTestId("hotelCardShow");
            // console.log("topRatedCards.length",topRatedCards.length)
            expect(topRatedCards.length).toBe(7);
        })
    })

})