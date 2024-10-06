import {HOTEL_IMAGE} from '../utils/constants' 
import { Link } from 'react-router-dom';
const HotelCard = (resData)=>{
    const {hotelData}= resData;
    const {name,locality, cuisines, cloudinaryImageId, avgRating, costForTwo,sla} =hotelData
    // console.log("name", name," - ",locality)
    return (
        <div key={name} data-testid="hotelCardShow" className="hotel-card w-[200px] border border-black m-3 p-4 text-[12px] flex flex-col flex-wrap items-center rounded-lg bg-gray-100 hover:bg-gray-200">
            <img src={HOTEL_IMAGE+cloudinaryImageId} className="hotel-card-pic rounded-lg"/>
                <div className='content flex flex-col flex-wrap items-center justify-center text-center mt-4'>
                    <h3 className='text-base font-bold mb-2'>{name}</h3>
                    <h4>{cuisines.join(", ")}</h4>
                    <h4>{avgRating} Stars</h4>
                    <h4>{costForTwo}</h4>
                    <h4>{sla.slaString}</h4>
                </div>
        </div>
    )
}

// higher order component
// takes HotelCard, and gives new component card with closest label 
export const closestLabel = (HotelCard)=>{
    // it returns new component 
    return (props)=>{
        return (
            <div>
                <label className='absolute bg-black text-white px-2 flex items-center rounded-md'>Closest</label>
                <HotelCard {...props} />
            </div>
        )
    }
}
export default HotelCard;