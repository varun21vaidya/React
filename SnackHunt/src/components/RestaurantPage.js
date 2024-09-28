import useFetchRestaurantPage from '../utils/useFetchRestaurantPage';
import { useParams } from "react-router-dom";
import {ShimmerCard} from "./ShimmerContainer";
import Accordian from './Accordian';
import { useState } from "react";
    
const RestaurantPage = ()=>{
    const { resId } = useParams();
    const [expand, setExpand] = useState(-1)

    const hotelInfo = useFetchRestaurantPage(resId);

    if (hotelInfo === null) return <ShimmerCard />

    const {name, locality, areaName, city, avgRatingString} = hotelInfo?.data?.cards[2]?.card?.card?.info;
    const hotelMenuDetails = hotelInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    const hotelMenuData = hotelInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (datacard)=> datacard?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    return (
        <div className='flex flex-col text-center justify-center'>
            
            <div className='flex justify-center items-center font-bold text-center m-4'>
            <h1 className='mx-6 text-2xl'>{name}</h1>
            <span className='py-1 px-3 rounded-2xl shadow-md bg-green-400 text-white'>{avgRatingString} ⭐</span>  
            </div>
            <h2 className='font-bold text-lg'>{locality}, {areaName}, {city}</h2>
            
            <h2>
                Menu
            </h2>
            {/* <ul>
                {hotelMenuDetails.map((eachDish)=> (<li key={eachDish?.card?.info?.id}>{eachDish?.card?.info?.name}</li>))}
            </ul> */}
            {hotelMenuData.map((category,index)=> (
                <Accordian 
                key={category?.card?.card?.title} data={category}
                // send showItems variable to child by taking control of expanding in parent and send to show child items or not from parent
                showItems={index===expand ? true : false} 
                // change state inside child by calling the setExpandFn and changing expand state to index
                setExpandFn={()=>setExpand(index)} />
                ) )}
        </div>
    )
}

export default RestaurantPage;