import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { beerReducer } from './reducers';

const store = createStore(beerReducer, applyMiddleware(thunk));

export default store;
