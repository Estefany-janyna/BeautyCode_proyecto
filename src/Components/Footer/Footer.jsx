import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo1.png'
import instagram_icon from '../../assets/instagram_1384015.png'
import facebook_icon from '../../assets/facebook_2168281.png'
import whatsapp_icon from '../../assets/whatsapp_4494470.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon } alt="" />
            </div>

            <div className="footer-icons-container">
                <img src={facebook_icon } alt="" />
            </div>

            <div className="footer-icons-container">
                <img src={whatsapp_icon } alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All</p>
        </div>
    </div>
  )
}

export default Footer