import { useState, useEffect } from "react";
import {RestaurantPage_URL} from './constants'

const useFetchRestaurantPage = (resId)=>{

    const [hotelInfo, setHotelInfo] = useState(null);

    useEffect(()=>{
        loadData();
    }, []);

    async function loadData(){
        try{
            const response = await fetch(RestaurantPage_URL+resId);
            const json = await response.json();
            // console.log("got restaurant data", json)
            setHotelInfo(json)
        }
        catch(error){
            console.log("cant load data",error)
        }
    }
    return hotelInfo;
}

export default useFetchRestaurantPage;