import axios from "axios";

export const getBook = () => {
    return axios.get('https://localhost:44365/api/Appointment');
}

export const deletBook = (id) => {
    return axios.delete(`https://localhost:44365/api/Appointment/${id}`)
}