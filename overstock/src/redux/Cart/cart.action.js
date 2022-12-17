
import {ADD_TO_CART,REMOVE_FROM_CART,CART_GET} from './cart.type';



export const getProducts = (dispatch) => {
    // dispatch({type:GET_PRODUCTS_LOADING});
    // try{
    //  let response = await axios.get('http://localhost:4000/product')
    //  dispatch({type:GET_PRODUCTS_SUCESS,payload:response.data})
    // }
    // catch(e){
    //  dispatch({type:GET_PRODUCTS_ERROR,payload:e.message})
    // }

    dispatch()

 };

export const addtocart = (product) => ({ type:ADD_TO_CART, payload: product});

export const removefromcart = (id) => ({ type:REMOVE_FROM_CART, payload:id});