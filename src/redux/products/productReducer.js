import { 
  GET_PRODUCTS, 
} from './productActions';
import initialData from './productConstants';

export default function productReducer (state = initialData, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      }
  }
}