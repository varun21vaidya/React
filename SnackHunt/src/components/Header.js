import { useContext, useState } from 'react';
import logo from '../assets/snackhunt-logo.png';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = ()=> {
    
    const [loginBtn, setLoginBtn] = useState("Login");

    function toggleBtn(){
        loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")}
    
    // get status from custom hook
    const currentStatus = useOnlineStatus();

    // get context for logged User
    const {loggedInUser} = useContext(UserContext);

    const cartItems = useSelector((store)=> store.cart.items);
    console.log("cart items",cartItems);
    return (


    <div id="heading" className="header flex justify-between bg-red-500">
        <div id="logo" className="logo-container">
            <Link to="/" ><img src={logo} className="logo w-44"/></Link>
        </div>
        <nav id="nav-items" className="nav-items flex items-center text-base text-white font-bold">
            <ul className='flex p-4 m-4'>
                <li className='px-4'>Current Status: {currentStatus ? "🟢" : "🔴"}</li>
                <li className='px-4'><Link to="/" >Home</Link></li>
                <li className='px-4'><Link to="/about" >About Us</Link></li>
                <li className='px-4'><Link to="/contact" >Contact Us</Link></li>
                <li className='px-4'><Link to="/cart" >Cart ({cartItems.length})</Link></li>

                <li>
                    <button className='login-btn px-4' onClick={toggleBtn}>
                        {loginBtn}
                    </button>
                </li>
                <li>
                    {loggedInUser}
                </li>
            </ul>

        </nav>
    </div>
)}

export default Header;