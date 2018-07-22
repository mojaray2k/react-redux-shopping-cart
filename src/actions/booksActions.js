"use strict"

// GET A BOKK
export function getBooks(){
  return { 
    type: "GET_BOOK",
  }
}

// POST A BOKK
export function postBooks(book){
  return { 
    type: "POST_BOOK", 
    payload: book
  }
}

// DELETE A BOOK
export function deleteBooks(_id){
  return {
    type: "DELETE_BOOK",
    payload: _id
  }
}

// UPDATE A BOOK
export function updateBooks(book){
  return {
    type: "UPDATE_BOOK",
    payload: book
  }
}
