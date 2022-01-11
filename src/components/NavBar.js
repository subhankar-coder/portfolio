import React from "react";
import { Navbar,Nav,Container, } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
export function NavBar(){
    return(
        <section id='navbar'>
            <div>

            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                <Navbar.Brand href="#about">Subhankar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#contact">Contacts</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <a href="#hire">Hire Me: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
</svg></a>
                    </Navbar.Text>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
        </section>
    )
}