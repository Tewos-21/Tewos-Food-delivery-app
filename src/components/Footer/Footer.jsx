import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState  } from 'react';
const Footer = () => {
  const [tewo, setTewo] = useState("tewo");
         useEffect(() => {
              window.scrollTo(0, 0); // Scroll to the top of the page on mount
            }, []);
      
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
              <div className="footer-content-left">
                  <Link to='/about'><img src={assets.logo} alt=""/></Link> 
                   <p>Tewo Food Delivery: Your Kitchen, Delivered. Craving your favorite dishes? Let Tewo bring the flavors of Ethiopia right to your doorstep. Enjoy a wide range of delicious meals, from traditional to modern, all prepared with care and delivered promptly. Order now and savor the taste of convenience!</p>
                   <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                   </div>
              </div>
              <div className="footer-content-center" >
                    <h2>COMPANY</h2>
                    <ul>
                       <a href='#header' onClick={() => setTewo("header")} className={tewo=== "header" ? "active" : ""}>
                       <li>Home</li>
                       </a>
                       <Link to='/about'><li>About us</li></Link>
                       <Link to='/order'><li>Delivery</li></Link> 
                       <Link><li>Privacy policy</li></Link> 
                    </ul>
              </div>
              <div className="footer-content-right">
               <h2>GET IN TOUCH</h2>
               <ul>
                <li>09-51-15-00-10</li>
                <li>tewos21@gmail.com</li>
               </ul>
              </div>

        </div>
              <hr />
              <p className="footer-copyright">Copyright 2016ET TewoFoods. All rights reserved.</p>
    </div>
  )
}

export default Footer