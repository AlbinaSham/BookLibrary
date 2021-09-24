import React from "react";
import { Link } from "react-router-dom";


import "./Header.css";


const Header = () =>{
    return(
        
      <header className = "NavBar" >
           <div className = "links">
              <Link className = "linkHome" to = "/" >
                  My Library
              </Link>
              <Link className = "linkWishList" to = "/wishlist" >
                 Wish List
              </Link>
            </div> 
      </header>
    )
};

export default Header;