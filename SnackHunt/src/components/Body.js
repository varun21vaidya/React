import fetchData from "./fetchData";
import HotelCard from "./HotelCard";
import { useEffect, useState } from "react";




export const Body = () => {
    const [hotelDataList, setHotelDataList] = useState([]); //initialize state for hotel data
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filteredList, setFilteredDataList] = useState([]);
    // let filteredList = hotelDataList;
    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchData();
                // console.log("data loaded", data)
                setHotelDataList(data);
                setLoading(false);
                setFilteredDataList(data);
                // filteredList = hotelDataList
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        loadData();
    }, []); // Empty dependency array ensures this runs only once on component mount

    const HandleSearch = (event) => {
        let tempList;
        const searchTerm = event.target.value.toLowerCase();

        // Reset to original list when input is cleared or backspace/delete
        if (searchTerm === "") {
            setFilteredDataList(hotelDataList);
            return;
        }
        // When we use backspace filter again through whole list
        if (event.code == "Delete" || event.code == "Backspace") {
            tempList = hotelDataList.filter((hotel) => {
                let x = hotel?.info?.name?.toLowerCase().indexOf(searchTerm);
                return x > -1;
            });
        }
        else{
            tempList = filteredList.filter((hotel) => {
                let x = hotel?.info?.name?.toLowerCase().indexOf(searchTerm);
                return x > -1;
            });
        }
        setFilteredDataList(tempList);
    }

    return (
        <div className="body">
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
                        setFilteredDataList(tempList);
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
                        setFilteredDataList(hotelDataList);
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
                    <HotelCard hotelData={hotel?.info} key={hotel?.info?.id} />
                ))}
            </div>
        </div>
    );
};
export default Body;
