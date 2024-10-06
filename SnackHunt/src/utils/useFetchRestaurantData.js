import { useState, useEffect } from "react";
import {CDN_URL} from '../utils/constants'


const useFetchRestaurantData = ()=>{
    const [hotelDataList, setHotelDataList] = useState([]); //initialize state for hotel data

    useEffect(() => {
        loadData();
    }, []); // Empty dependency array ensures this runs only once on component mount
    
    const loadData = async () => {
        try{
            const response = await fetch(CDN_URL);
            // console.log("response",response)
            const apidata = await response.json();
            // console.log("api data", apidata);
            const hotelArray = apidata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            // console.log("response frrrrrommmm useFetchRestaurant data", hotelArray)
            setHotelDataList(hotelArray);
        } catch (error) {
            console.log("got error",error)
            return setHotelDataList([]);;
        }
    };
    return hotelDataList;
}

export default useFetchRestaurantData;