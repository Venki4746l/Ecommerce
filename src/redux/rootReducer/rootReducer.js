

import { combineReducers } from "redux";
import { productDetailsReducer } from "../reducers/ProductRreducer";

import cardProduct from "../reducers/CardItemReducer";

import { ShopReducer } from "../reducers/ShopReducer";

const rootReducer = combineReducers({
    Products: ShopReducer,
    productDetails: productDetailsReducer,
    _cardProduct: cardProduct,
})

export default rootReducer