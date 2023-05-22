import axios from 'axios';

export const fetchBeers = (page = 1, perPage = 10) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`
      );
      dispatch({
        type: 'FETCH_BEERS_SUCCESS',
        payload: response.data,
        currentPage: page,
        totalPages: response.headers['x-total-pages'],
      });
    } catch (error) {
      dispatch({ type: 'FETCH_BEERS_ERROR', payload: error.message });
    }
  };
};
