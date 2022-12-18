
import {ADD_TO_CART,REMOVE_FROM_CART} from './cart.type';

//   let cart = localStorage.getItem("cartdata") || []
// cart.push(id)
// let zip = localStorage.setItem("cartdata",JSON.stringify(cart))
// let cart =localStorage.getItem("cartdata") || []
const initialvalue = {
    Cart:[]
};

export const CartReducer = (state=initialvalue,{type,payload}) => {
      
       switch(type){

        case ADD_TO_CART :{
            return{
                ...state,
                 Cart:payload
            };
        }

        case REMOVE_FROM_CART: {
            let newCart = state.Cart.filter((ele)=> ele.id !== payload)
            return{
                ...state,
                Cart:newCart,
            };
        }
       
        default:{
            return state;
        }

       }

}



