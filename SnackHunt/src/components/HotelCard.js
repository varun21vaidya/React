import {HOTEL_IMAGE} from '../utils/constants' 
const HotelCard = (resData)=>{
    const {hotelData}= resData;
    const {name, cuisines, cloudinaryImageId, avgRating, costForTwo,sla} =hotelData
    return (
        <div className="hotel-card" style={{backgroundColor: "#f0f0f0"}}>
        <img src={HOTEL_IMAGE+cloudinaryImageId} className="hotel-card-pic"/>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString}</h4>
        </div>
    )
}
export default HotelCard;