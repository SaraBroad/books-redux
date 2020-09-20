import { actionTypes } from "./actionTypes";
import axios from "axios";

export function addBooksSucess(books) {
  return { type: actionTypes.BOOKS.ADD_BOOKS, books };
}

export const getBooks = () => ({
    type: actionTypes.BOOKS.LOAD_BOOKS,
})

export const getBooksSuccess = (books) => ({
    type: actionTypes.BOOKS.LOAD_BOOKS_SUCCESS,
    payload: books,
})

export async function loadBooks() {
    return async (dispatch) => {
        dispatch(getBooks())
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        // const { data } = await axios.get('/api/books')
        console.log('data', data)
        dispatch(getBooksSuccess(data))
    } catch (error) {
        dispatch({ type: actionTypes.BOOKS.LOAD_BOOKS_FAILURE, payload: error.message })
    }
  }
}

export function loadBooksSuccess(books) {
  return { type: actionTypes.BOOKS.LOAD_BOOKS_SUCCESS, payload: books };
}

export function loadBooksFailure() {
  return { type: actionTypes.BOOKS.LOAD_BOOKS_FAILURE };
}

// export function fetchBooks() {
//   return async (dispatch) => {
//     dispatch(loadBooks());

//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts"
//       );
//       const data = await response.json();
//       console.log("fetchData", data);
//       dispatch(loadBooksSuccess(data));
//     } catch (error) {
//       dispatch(loadBooksFailure())
//     }
//   };
// }
