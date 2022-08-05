import { getBook } from "../../services/appointment";


export const getbook = () => {
    return dispatch => {
        getBook().then((res) => {
            dispatch({
                type: 'GET_BOOK',
                payload: res.data,
                bookLoading: false,
            })
        })
    }
}