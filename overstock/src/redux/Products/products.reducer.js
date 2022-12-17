
import {GET_PRODUCTS_LOADING,GET_PRODUCTS_SUCESS,GET_PRODUCTS_ERROR} from './products.type';

const initialState = {
    error:false,
    loading:false,
    Products:[]
}

export const productReducer = (state=initialState,{type,payload}) => {
    switch(type){

        case GET_PRODUCTS_LOADING : {
            return{
                ...state,
                loading:true,
                error: '',
            };
        }

        case GET_PRODUCTS_SUCESS : {
            return{
                ...state,
                loading: false,
                Products:payload
            }
        }
        case GET_PRODUCTS_ERROR: {
            return{
                ...state,
                loading:false,
                error:payload
            }
        }

        default:{
            return state;
        }
    }
}