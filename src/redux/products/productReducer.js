import { GET_PRODUCTS, GET_PRODUCT_BY_ID, CLEAR_PRODUCT } from './productActions';

import initialData from './productConstants';

export default function productReducer (state = initialData, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      }
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        product: action.payload
      }
    case CLEAR_PRODUCT: 
      return {
        ...state,
        product: action.payload
      }
    default: 
    return state;
  }
}