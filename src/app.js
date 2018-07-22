"use strict"
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

// STEP 3 define reducers
// IMPORT COMBINED REDUCERS
import reducers from './reducers/index';
// STEP 2a IMPORT ACTIONS
import { addToCart } from './actions/cartActions';
import { postBooks, deleteBooks, updateBooks } from './actions/booksActions';

// STEP 1 create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);
// store.subscribe(function() {
//   console.log('current state is: ', store.getState());
//   // console.log('current price: ', store.getState()[1].price);
// })
import BooksList from './components/pages/booksList';
ReactDOM.render(
  <Provider store={store}>
    <BooksList />
  </Provider>, 
  document.getElementById('app')
);

// STEP 2b  dispatch actions

//-->> BOOKS ACTIONS <<--
// POST A BOOK
// store.dispatch(postBooks([
//   {
//     id: 1,
//     title: 'this is the first book title',
//     description: 'this is the first book description',
//     price: 33.33
//   },
//   {
//     id: 2,
//     title: 'this is the second book title',
//     description: 'this is the second book description',
//     price: 50
//   },
//   {
//     id: 3,
//     title: 'this is the third book title',
//     description: 'this is the third book description',
//     price: 40
//   }
// ]));

// // UPDATE A BOOK
// store.dispatch(updateBooks(
//   { 
//     id: 2,
//     title: 'Learn React in 24hr'
//   }
// ));

// // DELETE A BOK
// store.dispatch(deleteBooks(
//   { id: 1 }
// ))


// //-->> CART ACTIONS <<--
// // ADD to cart
// store.dispatch(addToCart([{id: 2}]))
