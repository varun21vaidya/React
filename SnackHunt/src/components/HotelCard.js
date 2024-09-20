import {HOTEL_IMAGE} from '../utils/constants' 
import { Link } from 'react-router-dom';
const HotelCard = (resData)=>{
    const {hotelData}= resData;
    const {id, name, cuisines, cloudinaryImageId, avgRating, costForTwo,sla} =hotelData
    return (
        
        <div className="hotel-card">
        <img src={HOTEL_IMAGE+cloudinaryImageId} className="hotel-card-pic"/>
            <div className='content'>
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} Stars</h4>
                <h4>{costForTwo}</h4>
                <h4>{sla.slaString}</h4>
            </div>
        </div>
    )
}
export default HotelCard;