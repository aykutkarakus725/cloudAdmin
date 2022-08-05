const initialState = {
    bookData: [],
    bookLoading: true
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_BOOK':
            return { ...state, bookData: action.payload, bookLoading: action.bookLoading }
        default:
            return state;
    }
}

export default bookReducer;