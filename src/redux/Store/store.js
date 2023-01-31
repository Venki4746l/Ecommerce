//contributors venkateswara rao ,dinesh ,dhanaraju

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
<<<<<<< HEAD
=======
import { loadState } from '../LocalStorage/LocalStorage';

>>>>>>> 89ca65b752e80da9638c450027c7e83be964d832
import rootReducer from '../rootReducer/rootReducer';
//saving the cart data in local storage
const persistedState = loadState()

<<<<<<< HEAD
const store =  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));
=======

const store =  createStore(rootReducer,persistedState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
>>>>>>> 89ca65b752e80da9638c450027c7e83be964d832
export default store;