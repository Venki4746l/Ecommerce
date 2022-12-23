//contributors venkateswara rao ,dinesh ,dhanaraju

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import ShopAppCard from '../reducers/CardItemReducer';

const store =  createStore(ShopAppCard,applyMiddleware(thunkMiddleware));
export default store;