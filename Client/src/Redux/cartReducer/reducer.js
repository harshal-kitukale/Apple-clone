import { ADD_TO_CART, CART_PRODUCTS_FAILURE, CART_PRODUCTS_REQUEST, DATA_OF_CART, REMOVE_FROM_CART } from "./actionTypes";

const initialState = {
  isLoading: true,
  isError: false,
  cart: [],
};
export const reducer = (state = initialState, { type, payload }) => {
  // console.log(state);
  switch (type) {
    case ADD_TO_CART:
      // localStorage.setItem("cart", JSON.stringify([...state.cart, payload]));
      return { ...state, isLoading: false, cart: [...state.cart, payload] };
    case DATA_OF_CART:
      // localStorage.setItem("cart", JSON.stringify([...state.cart, payload]));
      return { ...state, isLoading: false, cart: payload };
    case REMOVE_FROM_CART:
      let item = state.cart.filter((item) => item.id != payload);
      // localStorage.setItem("cart", JSON.stringify(item));
      return { ...state, isLoading: false, cart: [...item] };
      case CART_PRODUCTS_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      }
      case CART_PRODUCTS_REQUEST: {
        return {
          ...state,
          isLoading: true,
        };
      }

    default:
      return state;
  }
};
