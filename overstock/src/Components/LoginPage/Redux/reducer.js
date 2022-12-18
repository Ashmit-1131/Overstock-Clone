import {
 
    GET_ERROR,
   LOGIN_SIGNUP_SUCCESS,
    SIGNOUT_SUCCESS,
 
  } from "./actionTypes";
  
  const initState = {
    loading: false,
    error: false,
   
    isAuth: false
  };
  
  
  if(window.localStorage.getItem("token")) {
    initState.isAuth = true;
  }
  
  export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
      
     
      case GET_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        
        };
      }
      
      
      case LOGIN_SIGNUP_SUCCESS: {
        window.localStorage.setItem("token",payload);
        return {
          ...state,
          isAuth: true
        }
      }
      case SIGNOUT_SUCCESS: {
        window.localStorage.removeItem("token");
        return {
          ...state,
          isAuth: false
        }
      }
     
      default: {
        return state;
      }
    }
  };