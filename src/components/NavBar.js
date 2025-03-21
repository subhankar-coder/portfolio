import React from "react";
import { Navbar,Nav,Container, } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaCloudDownloadAlt} from "react-icons/fa";
export function NavBar(){
    return(
        <section id='navbar'>
            <div>

            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                <Navbar.Brand href="#about">Subhankar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#workexperience">Experiences</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#contact">Contacts</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <div className="flex items-center">
                            <a
                                href="https://drive.google.com/file/d/1r-sDUrL81TLGFbIfYIKdiWPHikzfqvY0/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-blue-500 hover:text-blue-700"
                            >
                                <FaCloudDownloadAlt className="w-6 h-6 mr-2" />
                                <span className="text-lg font-medium">Resume</span>
                            </a>
                        </div>
                    </Navbar.Text>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
        </section>
    )
}