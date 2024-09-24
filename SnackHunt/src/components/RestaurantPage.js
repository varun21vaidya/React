import useFetchRestaurantPage from '../utils/useFetchRestaurantPage';
import { useParams } from "react-router-dom";
import {ShimmerCard} from "./ShimmerContainer";

    
const RestaurantPage = ()=>{
    const { resId } = useParams();

    const hotelInfo = useFetchRestaurantPage(resId);

    if (hotelInfo === null) return <ShimmerCard />

    const {name, locality, areaName, city, avgRatingString} = hotelInfo?.data?.cards[2]?.card?.card?.info;
    const hotelMenuDetails = hotelInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    return (
        <div>
            <h1>{name}</h1>
            <h2>{locality}, {areaName}, {city}</h2>
            <h3>{avgRatingString} Ratings</h3>
            <h2>
                Menu
            </h2>
            <ul>
                {hotelMenuDetails.map((eachDish)=> (<li key={eachDish?.card?.info?.id}>{eachDish?.card?.info?.name}</li>))}
            </ul>
        </div>
    )
}

export default RestaurantPage;