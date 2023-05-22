const initialState = {
  beers: [],
  error: null,
  currentPage: 1,
  totalPages: 1,
};

export const beerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BEERS_SUCCESS':
      return {
        ...state,
        beers: action.payload,
        currentPage: action.currentPage,
        totalPages: action.payload.length > 0 ? action.payload[0].totalPages : 1,
        error: null,
      };
    case 'FETCH_BEERS_ERROR':
      return {
        ...state,
        beers: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
