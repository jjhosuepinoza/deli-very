// import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
        <h1>Deli-very</h1>
        
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
              
            </div>
        </div>
        <div className="footer-content-center">
            <h2>NAVIGATION</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>CONTACT US</h2>
            <ul>
                <li>+59312354313</li>
                <li>contact@deli-very.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Javier Espinoza - All Right Reserved.</p>
    </div>
  )
}

export default Footer
