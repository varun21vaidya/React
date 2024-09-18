import { useState } from 'react';
import logo from '../assets/snackhunt-logo.png';

const Header = ()=> {
    
    const [loginBtn, setLoginBtn] = useState("Login");

    function toggleBtn(){
        loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")}
    return (
    <div id="heading" className="header">
        <div id="logo" className="logo">
            <img src={logo} className="logo"/>
        </div>
        <nav id="nav-items" className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
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