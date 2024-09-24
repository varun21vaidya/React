import fetchData from "./fetchData";
import loadMoreData from "./LoadMoreData";
import HotelCard from "./HotelCard";
import ShimmerContainer from "./ShimmerContainer"
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import useFetchRestaurantPage from "../utils/useFetchRestaurantPage";
import useFetchRestaurantData from "../utils/useFetchRestaurantData";


export const Body = () => {
    const hotelDataList = useFetchRestaurantData() || []; 
    const [filteredList, setFilteredList] = useState([]);

    if (hotelDataList.length!==0 && filteredList.length===0){
        setFilteredList(hotelDataList);
    }

    const HandleSearch = (event) => {
        let tempList =[];
        const searchTerm = event.target.value.toLowerCase();

        // Reset to original list when input is cleared or backspace/delete
        if (searchTerm === "") {
            setFilteredList(hotelDataList);
            return;
        }
        else{
            tempList = hotelDataList.filter((hotel) => {
                let x = hotel?.info?.name?.toLowerCase().indexOf(searchTerm);
                return x > -1;
            });
        }
        setFilteredList(tempList);
    }

    const currentStatus = useOnlineStatus()
    if (currentStatus===false){
        return (
            <div>
                <h1> You are Offline, Please check your Internet Connection</h1>
            </div>
        )
    }
    if(filteredList.length===0){
        return (
            <div className="body">
                <div className="search">
                    <input
                        className="searchbar">
                    </input>
                </div>
                <ShimmerContainer/>
            </div>
        )
    }
    return (
        <div className="body" >
            {/* onScroll={ShowMoreData} */}
            <div className="search">
                <input
                    className="searchbar"
                    placeholder="Search Restaurants"
                    onKeyUp={HandleSearch}
                ></input>
            </div>

            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const tempList = filteredList.filter(
                            (hotel) => hotel?.info?.avgRating >= 4
                        );
                        setFilteredList(tempList);
                        console.log("filtered", filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>

            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        setFilteredList(hotelDataList);
                        console.log("filter reset", filteredList);

                    }}
                >
                    Reset Filter
                </button>
            </div>



            {/* card container for hotels inforamation */}
            <div className="hotel-card-container">
                {/* use map instead of array, as react suggests to use functional programming */}
                {filteredList.map((hotel) => (
                    // key should be on the parent jsx so its put it in link
                    <Link to={"/restaurant/"+ hotel?.info?.id} key={hotel?.info?.id}>
                    <HotelCard hotelData={hotel?.info} />
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default Body;