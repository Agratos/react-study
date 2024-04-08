import React from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components"

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Outlet } from "react-router-dom";

const AppLayout = () => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Navbar expand="lg" className="bg-black">
                <Container fluid>
                    <Navbar.Brand onClick={() => navigate("/")}>
                        <LogoImage src={"assets/netflix.png"} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <Nav.Link 
                                className="text-white me-3"
                                onClick={() => navigate("/")} 
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link 
                                className="text-white"
                                onClick={() => navigate("/movies")} 
                            >
                                Movies
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2 bg-dark text-white"
                            />
                            <Button variant="outline-danger">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </Wrapper>
    )
}
const Wrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: black;
`;
const LogoImage = styled.img`
    height: 24px;
    padding: 0 12px;
    margin-right: 8px;
    cursor: pointer;
`;
const FormControl = styled(Form.Control)`
    border: 1px solid #444444;
    &::placeholder {
        color: white;
        font-weight: lighter;
    }
`;

export default AppLayout