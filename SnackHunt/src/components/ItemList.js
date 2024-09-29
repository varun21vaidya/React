import { useDispatch } from "react-redux";
import { HOTEL_IMAGE } from "../utils/constants";
import { addItems } from "../utils/cartSlice";
const ItemList = (props)=>{
    const {items} = props;
    console.log("items in itemlist",items)
    const dispatch = useDispatch()
    handleAddItems = (item)=>{
        dispatch(addItems(item));
    }

    return (
        <div className="flex flex-col m-auto justify-center p-2">
            {items.map((eachdish)=> (
                <div key={eachdish.id} className="m-auto p-4 shadow-lg flex justify-between items-center">
                    <div className="flex flex-col text-left w-10/12 p-4">
                        <span className="font-bold">{eachdish.name}</span>
                        <span>₹{eachdish.defaultPrice/100 || eachdish.price/100}</span>
                        <span className="text-xs">{eachdish.description}</span>
                        </div>
                    <div className="w-2/12">
                        <img src={HOTEL_IMAGE+eachdish.imageId}></img>
                        <div className="absolute -mt-4">
                            <button className="bg-black mx-8 text-white font-bold py-1 px-2 rounded-lg text-sm" onClick={()=>handleAddItems(eachdish)}>Add + </button>
                        </div>
                    </div>
                </div>
                ))}
        </div>
    )

}

export default ItemList