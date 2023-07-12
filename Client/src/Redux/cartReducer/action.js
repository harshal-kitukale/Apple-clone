import axios from "axios";
import { ADD_TO_CART, CART_PRODUCTS_FAILURE, CART_PRODUCTS_REQUEST, DATA_OF_CART, REMOVE_FROM_CART } from "./actionTypes";

export const addToCartAction = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};
export const getCartDataSuccess = (payload) => {
  return {
    type: DATA_OF_CART,
    payload,
  };
};
export const removeFromCartAction = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export const cartProductsRequest = () => {
  return {
    type: CART_PRODUCTS_REQUEST,
  };
};
export const cartProductsFailure = () => {
  return {
    type: CART_PRODUCTS_FAILURE,
  };
};

export const AddToCart =(id) =>
  (dispatch) => {
    dispatch(cartProductsRequest())
    axios
      .get(`https://gold-ostrich-toga.cyclic.app//${id}`)
      .then((res) => {
        console.log("asdf",res.data)
        dispatch(addToCartAction(res.data));
      })
      .catch((err) => {
        console.log(err);
        cartProductsFailure()
      })
  };


  export const CartData=(dispatch)=>{
    dispatch(cartProductsRequest())
    axios
     .get('https://gold-ostrich-toga.cyclic.app//cart')
     .then((res) => {
      console.log(res.data)
      dispatch(getCartDataSuccess(res.data));
     })
     .catch((err) => {
      console.log(err);
      dispatch(cartProductsFailure())
    })
 }
  export const RemoveCartData=(id)=>(dispatch)=>{
    // dispatch(cartProductsRequest())
   return ( axios
    .delete(`https://gold-ostrich-toga.cyclic.app//cart/delete/${id}`)
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err);
      // dispatch(cartProductsFailure())
    }))
    // console.log(id);
 }
