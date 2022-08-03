import React from 'react'
import FormDatatable from '../components/FormDatatable'
import Header from '../components/Header'

const BookList = () => {

    const columns = [
        {
            name: 'Fullname',
            maxWidth: "50%",
            selector: (row) => row.fullname,
            sortable: true,
        },
        {
            name: "Email",
            maxWidth: "50%",
            selector: (row) => row.email,
            sortable: true,
        },
    ]

    const data = [
        {
            id: 1,
            fullname: "Aykut",
            email: "deneme@gmail.com"
        },
        {
            id: 2,
            fullname: 'Okan',
            email: "deneme@gmail.com"
        },
    ]
    return (
        <div>
            <Header />
            <FormDatatable columns={columns} data={data} />
        </div>
    )
}

export default BookList