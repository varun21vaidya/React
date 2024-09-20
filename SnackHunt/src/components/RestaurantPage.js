import { useEffect, useState } from "react";
import { RestaurantPage_URL } from "../utils/constants";
import { useParams } from "react-router-dom";


async function getHotelDetails(hotelData) {
    // console.log("data for getHotelDetails is", hotelData)
    const restaurantDeails = hotelData?.data?.cards[2]?.card?.card?.info;
    // console.log("restaurantDeails",restaurantDeails)
    return restaurantDeails;

}
async function getHotelMenuDetails(hotelData) {
    console.log("data for getHotelMenuDetails is", hotelData)
    const hotelMenuArray = hotelData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    console.log("hotelMenuArray",hotelMenuArray)
    return hotelMenuArray;
}


const RestaurantPage = ()=>{
    const { resId } = useParams();
    // console.log("resId",resId)
    const [hotelData , setHotelData] = useState(null)
    const [hotelMenuDetails , setHotelMenuDetails] = useState([])


    const loadData = async ()=>{
        try{
            const apiURL = RestaurantPage_URL+resId;
            const data = await fetch(apiURL) 
            const tempHoteldata = await data.json();
            // console.log("data is being loaded",tempHoteldata);
            const tempHotelDetails = await getHotelDetails(tempHoteldata);
            setHotelData(tempHotelDetails);
            const tempHotelMenuDetails= await getHotelMenuDetails(tempHoteldata);
            setHotelMenuDetails(tempHotelMenuDetails);
        }
        catch(err){
            console.log("cant load data")
        }
    }

    useEffect(() => {
        loadData();
    }, []);
    return (
        <div>
            <h1>{hotelData?.name}</h1>
            <h2>{hotelData?.locality}, {hotelData?.areaName}, {hotelData?.city}</h2>
            <h3>{hotelData?.avgRatingString} Ratings</h3>
            <h2>
                Menu
            </h2>
            <ul>
                {hotelMenuDetails.map((eachDish)=> (<li>{eachDish?.card?.info?.name}</li>))}
            </ul>
        </div>
    )
}

export default RestaurantPage;