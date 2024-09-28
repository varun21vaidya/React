import { HOTEL_IMAGE } from "../utils/constants";

const ItemList = (props)=>{
    const {items} = props;

    return (
        <div className="flex flex-col m-auto justify-center p-2">
            {items.map((eachDish)=> (
                <div key={eachDish?.card?.info?.id} className="m-auto p-4 shadow-lg flex justify-between items-center">
                    <div className="flex flex-col text-left w-10/12 p-4">
                        <span className="font-bold">{eachDish?.card?.info?.name}</span>
                        <span>₹{eachDish?.card?.info?.defaultPrice/100 || eachDish?.card?.info?.price/100}</span>
                        <span className="text-xs">{eachDish?.card?.info?.description}</span>
                        </div>
                    <div className="w-2/12">
                        <img src={HOTEL_IMAGE+eachDish?.card?.info?.imageId}></img>
                        <div className="absolute -mt-4">
                            <button className="bg-black mx-8 text-white font-bold py-1 px-2 rounded-lg text-sm">Add + </button>
                        </div>
                    </div>
                </div>
                ))}
        </div>
    )

}

export default ItemList