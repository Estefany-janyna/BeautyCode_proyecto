import React, { useCallback, useContext, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo1.png'
import burguer from '../../assets/arrow.png'
import card from '../../assets/card.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';


export const Navbar = () => {
    const [menu, setMenu] = useState("Shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuref = useRef();

    const dropdown_toggle = (e) => {
        menuref.current.classList.toggle("nav-menu-visible");
        e.target.classList.toggle('open')
    }

    return (
        <nav className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="Shopper Logo" width="30px" />
                <p>SHORPPER</p>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={burguer} alt=""  />
            <ul ref={menuref} className='nav-menu'>
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
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </nav>

    )
}

export default Navbar