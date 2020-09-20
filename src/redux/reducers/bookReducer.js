import { actionTypes } from "../actions/actionTypes";

const initialState = {
  loading: false,
  hasErrors: false,
  books: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BOOKS.ADD_BOOKS:
      return {
        ...state,
        // id: action.id,
        // title: action.title
        books: action.value,
      };
    case actionTypes.BOOKS.LOAD_BOOKS: 
      return { ...state, loading: true }
    case actionTypes.BOOKS.LOAD_BOOKS_SUCCESS: {
        return { books: action.payload, loading: false, hasErrors: false }
    }
    case actionTypes.BOOKS.LOAD_BOOKS_FAILURE: {
        // return { ...state, loading: false, hasErrors: true }
        return { loading: false, hasErrors: true }
    }
    default:
      return state;
  }
};

export default bookReducer;
