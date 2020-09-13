import { actionTypes } from './actionTypes';

const books = {
    addBooks: (value) => {
        return { type: actionTypes.BOOKS.ADD_BOOKS, value}
    }
}

export { books }