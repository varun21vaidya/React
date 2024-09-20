import { useState } from 'react';
import logo from '../assets/snackhunt-logo.png';
import { Link } from 'react-router-dom';

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
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/about" >About Us</Link></li>
                <li><Link to="/contact" >Contact Us</Link></li>
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