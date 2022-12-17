
import {ADD_TO_CART,REMOVE_FROM_CART} from './cart.type';

const initialvalue = {
    Cart:[]
};

export const CartReducer = (state=initialvalue,{type,payload}) => {
      
       switch(type){

        case ADD_TO_CART :{
            console.log(payload)
            return{
                ...state,
                Cart:[...state.Cart,payload]
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



