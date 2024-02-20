import axios from 'axios';
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from '../Slices/productSlice';

export const fetchProducts = (apiUrl, apiKey, product) => async (dispatch) => {
  dispatch(fetchProductsStart());

  const options = {
    method: 'GET',
    url: apiUrl,
    params: {
      q: product,
      country: 'IN',
      language: 'en',
    },
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    dispatch(fetchProductsSuccess(response.data));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};
