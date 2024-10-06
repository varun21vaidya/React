import {fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import HotelData from "../MockData/HotelData.json"
import HotelCard from "../HotelCard";
import {closestLabel} from "../HotelCard"


test("Should test Restaurant Card", ()=>{

    render(<HotelCard hotelData={HotelData}/>)

    const name = screen.getByText("KFC");
    expect(name).toBeInTheDocument();
})

test("Should test Closest Hotel", ()=>{
    const ClosestHotelCard = closestLabel(HotelCard)
    render(<ClosestHotelCard hotelData={HotelData}/>)
    const closeornot = screen.getByText("Closest");
    expect(closeornot).toBeInTheDocument();
})