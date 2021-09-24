import React, { useContext} from "react";
import ReactDOM from 'react-dom';
import { GlobalContext } from "../../context/GlobalState";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./ReadMoreCard.css";

toast.configure()
const ReadMoreCard = ({ showCard,  closeCard, result}) =>{
    const { addToWishlist } = useContext(GlobalContext);

    if (showCard){
    return ReactDOM.createPortal(
      
        <div> 
            <div className = "readMoreCardContainer">
               <div className="readMoreCard">

                    <div className="readMoreImage">
                       <img src={result.volumeInfo.imageLinks.thumbnail} alt="book pic" />
                    </div>


                    <div className = "readMoreInfoContainer">
                        <div className="readMoreInfoButton">
                            <div className="readMoreInfo">
                                <h3>{result.volumeInfo.title}</h3>
                                <h4>{result.volumeInfo.authors}</h4>
                                <h5> Rating:{result.volumeInfo.averageRating} </h5>
                            </div>

                             <div className = "readMoreClosingButton">
                                <button  onClick={closeCard}  type="button" name="button">
                                 X</button>
                             </div>
                        
                        </div>
                  
                       
                 
                         <div className="description">
                                <p>{result.volumeInfo.description}</p>
                         </div> 
                             <button onClick={() =>{ addToWishlist(result);
                             {toast.info('Added to wishlist!') }}}
                              className ="addWishlistButton"> Add to a whishlist</button>
                    
                    </div>
                 </div>
                   

     
            </div>
        </div> , document.getElementById('card')  
    )
    } return null;
};

export default ReadMoreCard;