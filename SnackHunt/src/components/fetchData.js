import {CDN_URL} from '../utils/constants'

async function fetchData() {
    const apiURL = CDN_URL
    try{
    const response = await fetch(apiURL);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
    const apidata = await response.json();
    const hotelArray = apidata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log("final data got from api", hotelArray)
    return hotelArray || [];
    }
    catch(error){
        console.log("got error",error)
        return [error];
    }
}

export default fetchData;