import {CDN_URL} from '../utils/constants'

async function fetchData() {
    const apiURL = CDN_URL
    try{
        const response = await fetch(apiURL);
        console.log("url",apiURL)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const apidata = await response.json();
        console.log("final data got from api", apidata)
        const hotelArray = apidata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        return hotelArray || [];
    }
    catch(error){
        console.log("got error",error)
        return [error];
    }
}

export default fetchData;