import { actionTypes } from '../actions/actionTypes';

const initialState = {
    books: []
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.BOOKS.ADD_BOOKS: {
            return {
                ...state,
                    // id: action.id,
                    // title: action.title
                    books: action.value
            }
        }

    default: return state
    }
}

export default bookReducer