import API from '../../services/api';

const {REACT_APP_PRODUCTS_URL} = process.env;

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID';
export const CLEAR_PRODUCT = 'CLEAR_PRODUCT';

export const getProductsAction = () => async (dispatch, getState) => {
  const res = await API.get(REACT_APP_PRODUCTS_URL);
  dispatch({
    type: GET_PRODUCTS,
    payload: res.data
  });
}

export const getProductByIdAction = (id) => async (dispatch, getState) => {
  const res = await API.get(`${REACT_APP_PRODUCTS_URL}/${id}`);
  dispatch({
    type: GET_PRODUCT_BY_ID,
    payload: res.data
  });
}

export const clearProductAction = () =>  (dispatch, getState) => {
  
  dispatch({
    type: CLEAR_PRODUCT,
    payload: {}
  });
}
