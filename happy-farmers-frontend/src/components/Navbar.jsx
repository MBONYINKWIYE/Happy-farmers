import React from 'react'
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
    <div className='all-nav-contents'>
        <div>
            <h1>LOGO</h1>
        </div>
     <div className='nav-list'>
       <ul>
         <li><a href="">HOME</a></li>
         <li><a href="">ABOUT</a></li>
         <li><a href="">SHOP</a></li>
         <li>
         <div className="dropdown">
         <button className="dropbtn">VENDORS</button>
      <div className="dropdown-content">
           <a href="#">NEWS LETTER</a>
           <a href="#">ORDER</a>
      </div>
     </div>

         </li>
       </ul>
       </div> 
       <div className='nav-btn'>
          <button>SIGN IN</button>
       </div>
       <div className='nav-cart-icon'>
         <FaCartShopping />
       </div>
       </div> 
    </>
  )
}

export default Navbar