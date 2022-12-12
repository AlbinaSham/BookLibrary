import React, { useState, useEffect }  from "react";
import axios from "axios"; 



import "./Search.css";
import ResultCard from "../ResultCard/ResultCard";






const Search = () => {
    const [inputText, setInputText] = useState("");
    const [results, setResult] = useState([]);
    const [apiKey, setApiKey] = useState("AIzaSyCr_GZNXUb9AUJKtAQn8-bF5J89RZFHc8E");


    const handleSetResult = () =>{
           
       axios.get("https://www.googleapis.com/books/v1/volumes?q="+inputText+"&key"+apiKey+"&maxResults=12")    
       .then(data => {
           if (!data.errors) {
               setResult(data.data.items);
           }else{
               <h1>Ops...something wrong</h1>
               setResult([]);
           }
       })
    };
    useEffect(() => {
        handleSetResult();
    }, [inputText]);

    return(
        <div >
           <div className = "searchContainer" >
               <form className = "searchForm" >
                   <input className = "searchInput"
                     value = {inputText}
                     onChange = {(e) => {
                        e.preventDefault();
                        setInputText(e.target.value);

                     }

                     
                        
                    }
                     type="text"
                     placeholder="Search for books by title..." />
                        <button className = "searchButton"
                           onClick = {handleSetResult}
                           >Search
                        </button>
                </form>
                <div className = "container">
                <div className="grid">
                
                {results.map(result =>{
                  return(
                     <ResultCard key={result.id} result = {result} />
                    );
                   }
                 )}
             </div>  
                </div>
                
      
           </div>
        </div>  
    );
}

export default Search;
