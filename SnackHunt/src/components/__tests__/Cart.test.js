
import Cart from "../Cart";
import Header from "../Header";
import RestaurantPage from "../RestaurantPage";
import "@testing-library/jest-dom";
import { fireEvent, screen, render, waitFor } from "@testing-library/react";
import { BrowserRouter, json } from "react-router-dom";
import { Provider } from "react-redux";
import MOCK_DATA from "../MockData/RestaurantPageData.json"
import appStore from "../../utils/appStore";

beforeEach(()=>{
    global.fetch = jest.fn(()=>{
        return Promise.resolve({
            json: ()=>{
                return Promise.resolve(MOCK_DATA);
            }
        })
    })
})


describe("Cart Component", ()=>{

    beforeEach(async ()=>{
        await waitFor (()=>{
        render(
            <BrowserRouter >
                <Provider store={appStore}>
                    <Header />
                    <RestaurantPage />
                    <Cart />
                </Provider>
            </BrowserRouter>
        )
        })
    })

    test("go to restaurant page and check recommeded accordian is present or not", async ()=>{

        await waitFor (()=>{

            // go to recommended
            const accordian = screen.getByText(/Recommended/i)
            
            expect(accordian).toBeInTheDocument();

        })

    })

    test("check number of items in recommended", async ()=>{

        await waitFor (()=>{

            // go to recommended
            const accordian = screen.getByText(/Recommended/i)
            
            expect(accordian).toBeInTheDocument();


            // click on recommended and check no of items
            fireEvent.click(accordian);
            const itemlist = screen.getAllByTestId("itemsInList");
            expect(itemlist.length).toBe(8);

        })

    })

    test("click add button and check updated value in header", async ()=>{

        await waitFor (()=>{

            // go to recommended
            const accordian = screen.getByText(/Recommended/i)
            
            expect(accordian).toBeInTheDocument();


            // click on recommended and check no of items
            fireEvent.click(accordian);
            const itemlist = screen.getAllByTestId("itemsInList");
            expect(itemlist.length).toBe(8);


            // get all add buttons and click on first 1 
            const addBtns = screen.getAllByRole("button", {name:"Add +"})
            console.log("addBtns", addBtns.length);


            // before adding to Cart
            expect(screen.getByText("Cart (0)"))


            // click add button and check cart value in header
            fireEvent.click(addBtns[0]);
            expect(screen.getByText("Cart (1)"))
        })
    })


    test("click add button and check number of items in cart equal to added 1", async ()=>{

        await waitFor (()=>{
            const itemListInCart = screen.getAllByTestId("itemsInList");
            console.log("itemListInCart", itemListInCart.length);
            expect(itemListInCart.length).toBe(1);
        })

    })


    test("check clear cart button and its value after clicking it", async ()=>{

        await waitFor (()=>{

            // go to recommended
            const accordian = screen.getByText(/Recommended/i)
            
            expect(accordian).toBeInTheDocument();

            // click on recommended and check no of items
            fireEvent.click(accordian);


            // get cart value of items + current value
            const itemListInCart = screen.getAllByTestId("itemsInList");
            console.log("itemListInCart", itemListInCart.length);
            expect(itemListInCart.length).toBe(9);

            // check clear cart button
            const clearCart = screen.getByRole("button", {name:"Clear Cart"})
            expect(clearCart).toBeInTheDocument();


            // fire clear cart button and check reduced cart items
            fireEvent.click(clearCart);
            const itemListAfterClearCart = screen.getAllByTestId("itemsInList");
            expect(itemListAfterClearCart.length).toBe(8);
        })

    })
})