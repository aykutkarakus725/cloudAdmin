import React, { useEffect } from 'react'
import FormDatatable from '../components/FormDatatable'
import Header from '../components/Header'
import { Trash, Box } from 'react-feather'
import { Button } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getbook } from '../redux/book/action'
import { confirm } from '../utility/Sweetalert';
import { deletBook } from '../services/appointment'
import { DateFormater, DateFormater2 } from '../utility/utilsHelper'


const BookList = () => {


    const dispatch = useDispatch();
    const { bookData } = useSelector(state => state.bookReducer);
    useEffect(() => {
        dispatch(getbook());
    }, [])

    const deleteAppointment = (id) => {
        confirm(
            {
                title: "Onay",
                text: "Kaydı Silmek İstediğinizden Emin misiniz?",
            },
            () => {
                return deletBook(id);
            },
            async () => {
                dispatch(getbook());
            },
            async () => {
                return null;
            },
            async () => {
                return null;
            }
        )
    }

    const columns = [
        {
            name: 'İsim',
            maxWidth: "16%",
            selector: (row) => row.fullName,
            sortable: true,
        },
        {
            name: "Email",
            maxWidth: "16%",
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: 'Randevu Tarihi',
            maxWidth: "16%",
            selector: (row) => row.date.split('T')[0] + ' | ' + row.date.split('T')[1],
            sortable: true,
        },
        {
            name: 'Telefon',
            maxWidth: "16%",
            selector: (row) => row.phone,
            sortable: true,
        },
        {
            name: 'Açıklama',
            maxWidth: "16%",
            selector: (row) => row.description,
            sortable: true,
        },
        {
            name: 'Oluşturduğu Tarih',
            maxWidth: "16%",
            selector: (row) => row.createdDate.split('T')[0] + ' / ' + row.createdDate.split('T')[1],
            sortable: true,
        },
        {
            name: "İşlemler",
            maxWidth: "16%",
            cell: (row) => (
                <>
                    <Button
                        onClick={() => deleteAppointment(row.id)}
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
    return (
        <div>
            <Header />
            <FormDatatable columns={columns} data={bookData} />
        </div>
    )
}

export default BookList