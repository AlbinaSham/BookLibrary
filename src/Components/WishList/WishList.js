import React, { useContext } from 'react'
import { GlobalContext } from "../../context/GlobalState";
import WishListCard from "../WishListCard/WishListCard";

import "../Search/Search.css";


 const WishList = () => {
  const {  addToWishlist, wishlist} = useContext(GlobalContext);

  return (

          <div className="grid">
             
            {wishlist.map((result, index)=> (
                    <WishListCard result= {result} key = {index} />
            ))}
          
          </div>
     
    
  );
};

export default WishList;