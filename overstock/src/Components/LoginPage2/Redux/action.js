import {
   
    LOGIN_SIGNUP_SUCCESS,
    SIGNOUT_SUCCESS,
    GET_ERROR ,
  } from "./actionTypes";

  

  
  
  
  export const getError = () => ({
    type: GET_ERROR,
  });
  
  export const signoutPerformed = () => ({
    type: SIGNOUT_SUCCESS,
  });
  

  
 

  export const loginSignupSuccess = (payload) => ({
    type: LOGIN_SIGNUP_SUCCESS,
    payload,
  });
  
 