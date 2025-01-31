import React from 'react'
import './Header.css'
import { useEffect } from 'react';
const Header = () => {

   useEffect(() => {
                window.scrollTo(0, 0); // Scroll to the top of the page on mount
              }, []);
        
  return (
    <div className="header" id='header'>
        <div className="header-contents">

            <h2>Order you favourite food here</h2>
            <p>Craving your favorite dish? Tewos makes it easy. Browse our wide selection of restaurants, order online, and relax. Your food, delivered fast.</p>
            <button>View Menu</button>
        </div>
       
    </div>
  )
}

export default Header