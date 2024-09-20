import fetchData from "./fetchData";
import loadMoreData from "./LoadMoreData";
import HotelCard from "./HotelCard";
import ShimmerContainer from "./ShimmerContainer"
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';



export const Body = () => {
    const [hotelDataList, setHotelDataList] = useState([]); //initialize state for hotel data
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filteredList, setFilteredList] = useState([]);
    // let filteredList = hotelDataList;

    const loadData = async () => {
        try {
            const data = await fetchData();
            setHotelDataList(data);
            setLoading(false);
            setFilteredList(data);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []); // Empty dependency array ensures this runs only once on component mount

    const HandleSearch = (event) => {
        let tempList;
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

    if(loading){
        return (
            <div className="body">
            <div className="search">
                <input
                    className="searchbar"></input>
                </div>
                <ShimmerContainer/>
            </div>
        )
    }
    const ShowMoreData= async () => {
        setLoading(true)
        console.log("on scrolling")
        try {
            const data = await loadMoreData();
            const updatedData = [...hotelDataList,...data];
            setHotelDataList(updatedData);
            setFilteredList(updatedData);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="body" onScroll={ShowMoreData}>
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
                            (hotel) => hotel?.info?.avgRating <= 4
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