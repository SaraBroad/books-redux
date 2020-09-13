import * as actionTypes from '../actions';

const initialState = {
    books: []
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.books.ADD_BOOKS: {
            return {
                ...state,
                books
            }
        }

    default: return state
    }
}

export default bookReducer