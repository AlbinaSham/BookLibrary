import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";


// initial state
const initialState = {
    wishlist: localStorage.getItem("wishlist")
      ? JSON.parse(localStorage.getItem("wishlist"))
      : []
   
  };
  // create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
   
  }, [state]);


    // actions
    const addToWishlist = (result) => {
        dispatch({ type: "ADD_TO_WISHLIST", payload: result });
      };
      const removeFromWishlist = (title) => {
        dispatch({ type: "REMOVE_FROM_WISHLIST", payload: title});
      };
  return (
    <GlobalContext.Provider
      value={{
        wishlist: state.wishlist,
        addToWishlist,
        removeFromWishlist

        
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};