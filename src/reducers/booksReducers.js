"use strict"

// BOOKS REDUCER

export function booksReducers(state={books: [
  {
    _id: 1,
    title: 'this is the first book title',
    description: 'this is the first book description',
    price: 44.33
  },
  {
    _id: 2,
    title: 'this is the second book title',
    description: 'this is the second book description',
    price: 55
  }
]}, action){
  switch(action.type){
    case "GET_BOOKS":      
      return {...state, books:[...state.books]}
      break;
    case "POST_BOOK":
      // Don't use state.push because ".push()" is mutable
      // let books = state.books.concat(action.payload);
      // return {books};
      return {books:[...state.books, ...action.payload]}
      break;
    case "DELETE_BOOK":
      // Create a copy of the current array of books
      const currentBookToDelete = [...state.books]
      // Determine at whichindex in the books array is the book to be deleted
      const indexToDelete = currentBookToDelete.findIndex(
        function(book){
          return book._id === action.payload._id;
        }
      )
      return {books: [...currentBookToDelete.slice(0, indexToDelete),
      ...currentBookToDelete.slice(indexToDelete + 1)]}
      break;
    case "UPDATE_BOOK":
      // Create a copy of the current array of books
      const currentBookToUpdate = [...state.books]
      // Determine at whichindex in the books array is the book to be updated
      const indexToUpdate = currentBookToUpdate.findIndex(
        function(book){
          return book._id === action.payload._id;
        }
      )
      // Create a new book object with the new values and with the same array index of the item we want to replace. 
      // To acheive this we wil use ...spread but we could use conccat also
      const newBookToUpdate = {
        ...currentBookToUpdate[indexToUpdate],
        title: action.payload.title
      } 
      // The purpose of this log is to show you how newBookToUpdate looks like
      //console.log("What is it newBookToUpdate", newBookToUpdate);
      // use slice to remove the book at the specified index, replace with the new object and concatenate
      // it with the rest of the items in the array
      return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate,
      ...currentBookToUpdate.slice(indexToUpdate + 1)]}
      break;
  }
  return state;
}