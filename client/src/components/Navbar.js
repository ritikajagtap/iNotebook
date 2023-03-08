import React, {useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';



const Navbar1 = ()=> {
    let location = useLocation();
    useEffect (()=> {
        console.log(location.pathname);
    }, [location]);
    
    return (
        <>
            <Navbar className='navbar-dark bg-dark' bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">iNotebook</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className={`${location.pathname==="/"? "active" : ""}`} href="/">Home</Nav.Link>
                            <Nav.Link href="about" className={`${location.pathname==="/about"? "active" : ""}`}>About</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navbar1