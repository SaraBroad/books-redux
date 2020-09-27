import { actionTypes } from "./actionTypes";
// import axios from "axios";

export function addBooksSucess(data) {
  return { type: actionTypes.BOOKS.ADD_BOOKS, data };
}

export const getBooks = () => ({
    // type: actionTypes.BOOKS.LOAD_BOOKS,
    type: actionTypes.BOOKS.LOAD_BOOKS,

})

export const getBooksSuccess = (data) => ({
    type: actionTypes.BOOKS.LOAD_BOOKS_SUCCESS,
    payload: data,
})

export function loadBooksFailure() {
    return { type: actionTypes.BOOKS.LOAD_BOOKS_FAILURE, payload: error.message };
  }

// export async function loadBooks() {
//     return async (dispatch) => {
//         dispatch(getBooks())
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//         const books = await response.json()
//         // const { data } = await axios.get('/api/books')
//         console.log('data', books)
//         dispatch(getBooksSuccess(books))
//     } catch (error) {
//         dispatch({ type: actionTypes.BOOKS.LOAD_BOOKS_FAILURE, payload: error.message })
//     }
//   }
// }

export const loadBooks = () => async (dispatch) => {
    try {
      dispatch(getBooks());
      const { data } = await fetch('https://jsonplaceholder.typicode.com/posts')
      dispatch(getBooksSuccess(data));
    } catch (error) {
        console.log(error)
    //   dispatch(loadBooksFailure(error));
    }
  };




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
