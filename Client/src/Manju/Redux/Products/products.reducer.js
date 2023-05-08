import {
  GET_PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE,
  PRODUCTS_REQUEST,
} from "./products.actiontypes";
const initState = {
  isLoading: false,
  isError: false,
  products: [],
};
export const productsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case PRODUCTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    }
    case PRODUCTS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default: {
      return state;
    }
  }
};
