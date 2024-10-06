import ItemList from "./ItemList";
import { useState } from "react";
const Accordian = (props)=>{

    // to make this accordian controlled component so it can be expanded from parent send showItems from parent only 
    // instead of changing states here.
    const {data, showItems, setExpandFn} = props;
    const title= data?.card?.card?.title, itemsList= data?.card?.card?.itemCards.map((eachDish)=>eachDish?.card?.info)


    // use state to change expansion of card based on handleclick
    // const [showItems, setShowItems] = useState(false);

    const handleClick = ()=>{
        // setShowItems(!showItems);
        setExpandFn()
    }

    return (
        <div data-testid="accordian" className="flex text-center flex-col bg-gray-50 w-6/12 m-auto">
            <div className="flex justify-between items-center py-2 px-6 shadow-lg cursor-pointer" onClick={handleClick}>
                <span className="header font-bold ">{title} ({itemsList.length})</span> 
                <span>🔻</span>
            </div>
            
            {showItems ? (
                        <div className="items-body p-4">
                            <ItemList items={itemsList} />
                        </div>) : (<div></div>)}
        </div>
        
    )
}


export default Accordian;