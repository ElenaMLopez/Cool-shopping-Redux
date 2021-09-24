import API from '../../services/api';

const {REACT_APP_PRODUCTS_URL} = process.env;

export const GET_PRODUCTS = 'GET_PRODUCTS';

export const getProductsAction = () => async (dispatch, getState) => {
  const res = await API.get(REACT_APP_PRODUCTS_URL);
  dispatch({
    type: GET_PRODUCTS,
    payload: res.data
  });
}
