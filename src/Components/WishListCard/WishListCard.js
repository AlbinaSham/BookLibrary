import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



import "./WishListCard.css";

toast.configure()
const WishListCard = ({result, type}) =>{


    const { removeFromWishlist,wishlist } = useContext(GlobalContext);

   


    return(
        <div className = "container" >
           
        <div className="wishcardContainer"  >

          <div className="cardImage" >

           
           <img 
             src={  result.volumeInfo.imageLinks === undefined
                ? ""
                : `${result.volumeInfo.imageLinks.thumbnail}`} 
             alt = {result.title} 
          />
          
          </div>
          <div 
             className="cardInfo">
          <a >
              {result.volumeInfo.title}   
         </a>
            <h5 >
               {result.volumeInfo.authors}
            </h5>
          </div > 
          <div className = "wishlistcardButtons">
          
          <button  
          className = "deliteWishList"
              onClick={() =>{removeFromWishlist(result.volumeInfo.title); 
               {toast.info('Removed from wishlist!') } } }
              >Remove.
          </button>
          
          </div>
          
          </div>
          </div>
    );
};

export default WishListCard;