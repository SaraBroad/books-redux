import { actionTypes } from "./actionTypes";
import axios from "axios";
import Axios from "axios";

export function addBooksSucess(books) {
  return { type: actionTypes.BOOKS.ADD_BOOKS, books };
}

// export function loadBooks() {
//   return { type: actionTypes.BOOKS.LOAD_BOOKS };
// }

export async function loadBooks(dispatch) {
    try {
        dispatch({ type: actionTypes.BOOKS.LOAD_BOOKS })
        const { data } = await axios.get('/api/books')
        dispatch({ type: actionTypes.BOOKS.LOAD_BOOKS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: actionTypes.BOOKS.LOAD_BOOKS_FAILURE, payload: error.message })
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
