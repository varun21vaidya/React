import logo from '../assets/snackhunt-logo.png';

const Header = ()=> {return (
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
            </ul>
        </nav>
    </div>
)}

export default Header;