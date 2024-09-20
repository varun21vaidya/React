import {MoreData_OBJECT, MoreData_URL} from '../utils/constants'

async function loadMoreData() {
    const apiURL = MoreData_URL;
    try{
    const response = await fetch(apiURL,
       { body: JSON.stringify(MoreData_OBJECT)}
    );
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
    const apidata = await response.json();
    const hotelArray = apidata?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log("final data got from api", hotelArray)
    return hotelArray || [];
    }
    catch(error){
        console.log("got error",error)
        return [error];
    }
}

export default loadMoreData;