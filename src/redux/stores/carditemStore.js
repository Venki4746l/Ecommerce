import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import ShopAppCard from '../reducers/CardItemReducer';

const CardItemstore =  createStore(ShopAppCard,applyMiddleware(thunkMiddleware));
export default CardItemstore;