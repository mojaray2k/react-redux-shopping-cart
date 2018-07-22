"use strict"
import { combineReducers } from "../../node_modules/redux";

// HERE IMPORT REDDUCERS TO BE COMBINED
import { booksReducers } from './booksReducers';
import { cartReducers } from './cartReducers';

// HERE COMBINE REDUCERS
export default combineReducers({
  books: booksReducers,
  cart: cartReducers
})
