import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {

    return (
        <div>
            <Navbar bg='secondary' style={{ height: '70px', width: '100%', }}>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link style={{ color: 'white' }} href="home">Home</Nav.Link>
                        <Nav.Link style={{ color: 'white' }} href="booklist">Book List</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header