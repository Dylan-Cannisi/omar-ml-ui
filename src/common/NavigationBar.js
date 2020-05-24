import React from 'react';
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="xl" bg="dark" variant="dark">
            <Navbar.Brand href="#home" >Omar Machine Learning</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="#home">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="#about">About</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown id="collapsible-nav-dropdown" title="Datasets">
                        <NavDropdown.Item href="#datasets/create">Create New Dataset</NavDropdown.Item>
                        <NavDropdown.Item href="#datasets/browse">Browse My Datasets</NavDropdown.Item>
                        <NavDropdown.Item href="#datasets/hub">Browse Public Datasets</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown id="collapsible-nav-dropdown" title="Models">
                        <NavDropdown.Item href="#models/create">Create New Model</NavDropdown.Item>
                        <NavDropdown.Item href="#models/browse">Browse My Models</NavDropdown.Item>
                        <NavDropdown.Item href="#models/hub">Browse Public Models</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown id="collapsible-nav-dropdown" title="Watcher">
                        <NavDropdown.Item href="#watchers/create">Create New Watcher</NavDropdown.Item>
                        <NavDropdown.Item href="#watchers/browse">Browse My Watchers</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)