import axios from "axios"
import {CART_ADD_ITEM} from '../constants/cartconstants.js'

export const addtocart=(productid)=>async (dispatch,getstate)=>{
    const {data}=await axios.get(`/api/products/${productid}`);
   
   dispatch({
       type: CART_ADD_ITEM,
       payload:{
             product:data._id,
             image:data.img1,
             price:data.price,
             name:data.name
       }
   })
   localStorage.setItem('cartitems',JSON.stringify(getstate().cart.cartitems))
}
export const removefromcart=(productid)=>async(dispatch,getstate)=>{

dispatch(
    {
        type:'CART_REMOVE_ITEM',
        payload:productid
    }
    
)
localStorage.setItem('cartitems',JSON.stringify(getstate().cart.cartitems))
}