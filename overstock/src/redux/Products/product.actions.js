import axios from "axios"
import {GET_PRODUCTS_LOADING,GET_PRODUCTS_SUCESS,GET_PRODUCTS_ERROR} from './products.type';

export const getProducts =async (dispatch) => {
   dispatch({type:GET_PRODUCTS_LOADING});
   try{
    let response = await axios.get('http://localhost:4000/product')
    dispatch({type:GET_PRODUCTS_SUCESS,payload:response.data})
   }
   catch(e){
    dispatch({type:GET_PRODUCTS_ERROR,payload:e.message})
   }
};