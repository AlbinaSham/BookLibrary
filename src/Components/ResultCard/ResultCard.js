import React, { useState, useContext} from "react";
import { GlobalContext } from "../../context/GlobalState";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import "./ResultCard.css";
import ReadMoreCard from "../ReadMoreCard/ReadMoreCard";




 toast.configure()

 const ResultCard = ({ result }) =>{
    const [showCard, setShowCard] = useState(false);

    const openShowCard = () =>{
 
      setShowCard (prev => !prev);
 
    };
    const { addToWishlist, wishlist } = useContext(GlobalContext);
    let storedBook = wishlist.find((o) => o.id === result.id);


    const wishlistDisabled = storedBook ? true : false;

  
     return(
        <div className = "container" >
           
        <div className="cardContainer"  >

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
          </div> 
          <div className = "cardButtons">
              <button className = "readMoreButton"
               onClick = {openShowCard}
              >Read more</button>
                <ReadMoreCard
                 key = {result.title}
                 result = {result}
                 showCard = { showCard } 
                 closeCard = {()=> setShowCard(false)}
                 setShowCard = { setShowCard } 
              />
              <button className = "addWhislistButton" 
              disabled={wishlistDisabled}
               onClick={() =>{addToWishlist(result);
               {toast.info('Added to wishlist!') }  }}>Add to wishlist</button> 
          </div>
       </div>
    </div>
        
        
     );
 };
 export default ResultCard;