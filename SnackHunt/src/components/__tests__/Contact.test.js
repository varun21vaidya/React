import Contact from "../Contact";
import {render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


describe("Contact us Component Group",()=>{
    test("should load contact component", ()=>{
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })


    test("Should test button in contact component",()=>{
        render(<Contact/>);
        // const button = screen.getByRole("button");
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();

    })

    test("should test input placeholder", ()=>{
        render(<Contact />);
        const input = screen.getByPlaceholderText("Name");
        expect(input).toBeInTheDocument();
    })

    test("Should  load 2 input boxes", ()=>{
        render(<Contact />);
        // for multiple boxes use getAllByRole else it will give error
        const inputBoxes= screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(2);
    })
});