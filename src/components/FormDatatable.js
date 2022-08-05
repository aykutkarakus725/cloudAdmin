import React, { Fragment, useState } from 'react'
import DataTable from "react-data-table-component";
import ReactPaginate from "react-paginate";
import {
    Card,
    CardBody,
    Input,
    Row,
    Col,
    Label,
} from "reactstrap";

const FormDatatable = ({ columns, data }) => {


    const [pageNumber, setpageNumber] = useState(1);
    const [FilterPageNumber, setFilterPageNumber] = useState(1);
    const [postPerPage, setpostPerPage] = useState(5);
    const [searchTerm, setsearchTerm] = useState("");
    const [filteredData, setfilteredData] = useState([]);


    const filterPageVisited = (FilterPageNumber - 1) * postPerPage;
    const pageVisited = (pageNumber - 1) * postPerPage;

    const changePage = ({ selected }) => {
        if (searchTerm.length) {
            setFilterPageNumber(selected);
        } else {
            setpageNumber(selected + 1);
        }
    };

    const dataToRender = () => {
        const dataToMap = searchTerm.length ? filteredData : data;
        const displayPosts = searchTerm.length
            ? dataToMap?.slice(filterPageVisited, FilterPageNumber * postPerPage)
            : dataToMap?.slice(pageVisited, pageNumber * postPerPage);
        return displayPosts;
    };

    const handlePerPage = (e) => {
        const value = parseInt(e);
        setpostPerPage(value);
    };

    const turkishToLower = word => {
        var string = word;
        var letters = { İ: "i", I: "ı", Ş: "ş", Ğ: "ğ", Ü: "ü", Ö: "ö", Ç: "ç" };
        string = string.replace(/(([İIŞĞÜÇÖ]))/g, function (letter) {
            return letters[letter];
        });
        return string?.toLowerCase();
    };


    const handleFilter = (e) => {

        const value = e.target.value,
            // dataTableSearchQueryLower = e.target.value.trim().toLowerCase();
            dataTableSearchQueryLower = turkishToLower(e.target.value.trim());
        setsearchTerm(e.target.value)
        let updatedData = []



        if (value?.length) {

            updatedData = data.filter(item => {
                return (
                    turkishToLower(item.fullName).includes(dataTableSearchQueryLower) ||
                    turkishToLower(item.email).includes(dataTableSearchQueryLower)
                )
            })
        }
        setfilteredData([...updatedData])
    };




    const customPagination = () => {
        const pageCount = Number(
            Math.ceil(
                searchTerm.length
                    ? filteredData.length / postPerPage
                    : data.length / postPerPage
            )
        );
        const forceNumber = searchTerm.length ? FilterPageNumber : pageNumber;
        return (
            <ReactPaginate
                previousLabel={""}
                nextLabel={""}
                pageCount={pageCount || 1}
                activeClassName={"active"}
                forcePage={forceNumber !== 0 ? forceNumber - 1 : 0}
                onPageChange={changePage}
                pageClassName={"page-item"}
                nextLinkClassName={"page-link"}
                nextClassName={"page-item next"}
                previousClassName={"page-item prev"}
                previousLinkClassName={"page-link"}
                pageLinkClassName={"page-link"}
                containerClassName={
                    "pagination react-paginate justify-content-end my-2 pr-1"
                }
            />
        );
    };




    return (
        <Fragment>
            <Card className='p-3'>
                <Row className='mt-1' style={{ width: '100%', height: '100%' }}>
                    <Col xs={6}>
                        <div className="d-flex align-items-center">
                            <Label className="ml-1"> Toplam </Label>
                            <Input
                                className="dataTable-select w-25 ml-1"
                                type="select"
                                id="sort-select"
                                onChange={(e) => handlePerPage(e.target.value)}
                            >
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={15}>15</option>
                            </Input>
                            <Label className='ml-1'>&nbsp; kayıt gösteriliyor</Label>
                        </div>
                    </Col>

                    <Col
                        xs={6}
                        className="d-flex align-items-center justify-content-sm-end mt-sm-0"
                        sm="6"
                    >
                        <Label className="mr-1" for="search-input">
                            Ara
                        </Label>
                        <Input
                            className="dataTable-filter mr-2 w-25"
                            type="text"
                            id="search-input"
                            onChange={handleFilter}
                            bsSize="sm"
                        ></Input>
                    </Col>
                </Row>
                <CardBody>
                    {dataToRender()?.length > 0
                        ?
                        <DataTable
                            noHeader
                            responsive
                            striped
                            pagination
                            columns={columns}
                            data={dataToRender()}
                            paginationComponent={customPagination}
                        // expandableRows
                        // expandOnRowClicked
                        // expandableRowsComponent={ExpandableTable}
                        // noHeader
                        // pagination
                        // subHeader
                        // striped
                        // responsive
                        // highlightOnHover
                        // paginationServer
                        // paginationComponent={customPagination}
                        // columns={columns}
                        // sortIcon={<ChevronDown />}
                        // className="react-dataTable"
                        // data={dataToRender()}
                        />
                        :
                        <div>Kayıt bulunamadı</div>
                    }
                </CardBody>
            </Card>
        </Fragment>
    )
}

export default FormDatatable