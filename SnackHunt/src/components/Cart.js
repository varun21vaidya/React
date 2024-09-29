import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  console.log("inside cart component");
  const cartItems = useSelector((store) => store?.cart?.items);

  const dispatch = useDispatch()
 const clearCartFn = ()=>{
    dispatch(clearCart());
 }

  return (
    <div className="text-center m-4 p-4">
      <div className="flex justify-center w-auto">
      <h1 className="text-2xl font-bold">Cart</h1>
        <button className="ml-14 bg-black text-white px-2 py-1" onClick={clearCartFn}>
          Clear Cart
        </button>
      </div>


      {/* {cartItems.map((eachItem)=>{
            console.log("eachItem.name",eachItem.name)
            return (<h1>{eachItem.name}</h1>)
        })} */}
      <div>{cartItems.length>0 ?(<ItemList items={cartItems} />) : (<h1 className="font-bold text-xl m-4 p-4">No Items in the Cart ☹️ Add Items Quickly 😋 </h1>)}</div>
    </div>
  );
};
export default Cart;
