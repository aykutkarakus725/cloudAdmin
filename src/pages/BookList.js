import React from 'react'
import FormDatatable from '../components/FormDatatable'
import Header from '../components/Header'
import { Trash, Box } from 'react-feather'
import { Button } from 'reactstrap'

const BookList = () => {

    const columns = [
        {
            name: 'Fullname',
            maxWidth: "20%",
            selector: (row) => row.fullname,
            sortable: true,
        },
        {
            name: "Email",
            maxWidth: "50%",
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: "İşlemler",
            maxWidth: "30%",
            cell: (row) => (
                <>
                    <Button
                        // onClick={() => deleteApplication(row.id)}
                        outline
                        color="danger"
                        className='mr-2'
                    >
                        <Trash size={20} cursor="pointer" />
                    </Button>
                    {/* <Button
                        // onClick={() => updateApplication(row)}
                        outline
                        color="info"
                        className="ml-2"
                    >
                        <Box cursor="pointer" size={20} />
                    </Button> */}
                </>
            ),
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