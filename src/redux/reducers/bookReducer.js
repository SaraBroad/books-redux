const initialState = {
    books: []
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOKS: {
            return {
                ...state,
                books
            }
        }

    default: return state
    }
}

export default bookReducer