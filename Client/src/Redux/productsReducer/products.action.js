import { getData } from "../../Manju/LocalStorage/ls";
import {
  GET_PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE,
  PRODUCTS_REQUEST,
} from "./products.actiontypes";
import axios from "axios";


export const productsRequest = () => {
  return {
    type: PRODUCTS_REQUEST,
  };
};
export const productsFailure = () => {
  return {
    type: PRODUCTS_FAILURE,
  };
};
export const getProductsSuccess = (payload) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload,
  };
};
export const getSingleProduct = (id) => (dispatch) => {
  dispatch({ type: PRODUCTS_REQUEST });

  return axios
    .get(`https://fancy-cyan-robe.cyclic.app/product/singleProduct/${id}`)
    .then((res) => {
      return(res.data);
    })
    .catch(() => {
      dispatch({ type: PRODUCTS_FAILURE });
    });
};
//
//
export const getProducts = (url) => (dispatch) => {
  dispatch(productsRequest());
  axios
    .get(url, {
      headers: {
        Authorization: `${getData("token_bolt")}`,
      },
    })
    .then((res) => {
      dispatch(getProductsSuccess(res.data));
      console.log(res.data)
    })
    .catch(() => dispatch(productsFailure()));
};
