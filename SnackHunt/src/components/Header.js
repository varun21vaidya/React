import { useState } from 'react';
import logo from '../assets/snackhunt-logo.png';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = ()=> {
    
    const [loginBtn, setLoginBtn] = useState("Login");

    function toggleBtn(){
        loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")}
    
    const currentStatus = useOnlineStatus();
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
                <li className='px-4'>Cart</li>
                <li>
                    <button className='login-btn' onClick={toggleBtn}>
                        {loginBtn}
                    </button>
                </li>
            </ul>
        </nav>
    </div>
)}

export default Header;