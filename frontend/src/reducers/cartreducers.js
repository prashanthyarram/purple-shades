import { CART_ADD_ITEM } from "../constants/cartconstants";
import { CART_REMOVE_ITEM } from "../constants/cartconstants";


export const cartreducer=(state={cartitems:[]},action)=>{
switch(action.type){
case CART_ADD_ITEM:
    const item=action.payload;

    const existitem=state.cartitems.find((x)=>x.product === item.product);
    if(existitem){
        return{
            ...state,cartitems:[...state.cartitems]
        }
    }
    else{
        return{...state,cartitems:[...state.cartitems,item]}
    }

case CART_REMOVE_ITEM: 
return{
    ...state,
    cartitems:state.cartitems.filter((x)=>x.product!==action.payload)
}


default:
        return  {...state,cartitems:[...state.cartitems]}
    }


}