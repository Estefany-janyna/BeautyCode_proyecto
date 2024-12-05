import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo1.png'
import card from '../../assets/card.png'
import { Link } from 'react-router-dom';


export const Navbar = () => {
    const [menu, setMenu] = useState("Shop");
    return (
        <nav className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="Shopper Logo" width="30px" />
                <p>SHORPPER</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => setMenu("shop")}>
                    <Link style={{textDecoration: 'none'}} to='/'>Shop</Link>
                    {menu === "shop" && <hr />}
                </li>
                <li onClick={() => setMenu("mens")}>
                    <Link style={{textDecoration: 'none'}} to='/mens'>Men</Link>
                    {menu === "mens" && <hr />}
                </li>
                <li onClick={() => setMenu("womens")}>
                    <Link style={{textDecoration: 'none'}} to='/womens'>Women</Link>
                    {menu === "womens" && <hr />}
                </li>
                <li onClick={() => setMenu("kids")}>
                    <Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>
                    {menu === "kids" && <hr />}
                </li>
            </ul>
            <div className="nav_login-cart">
                <button>
                    <Link style={{textDecoration: 'none'}} to='/login'>Login</Link>
                </button>
                <Link style={{textDecoration: 'none'}} to='/cart'>
                    <img src={card} alt="Cart Icon" width="30px" />
                </Link>
                <div className="nav-cart-count">0</div>
            </div>
        </nav>

    )
}

export default Navbar