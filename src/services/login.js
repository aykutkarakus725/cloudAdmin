import axios from 'axios'

export const login = (data) => {
    return axios.post('https://visitcorum.com/api/Auth/Login', data)
}